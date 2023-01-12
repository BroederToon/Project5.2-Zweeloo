import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Geojson, Marker } from "react-native-maps";
import { map } from "../styles/map_page_styles";
import { useEffect, useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { IP } from "@env";
import { Audio } from "expo-av";

/**
 * routeId for the id of the route that you want to show.
 * hasLocation if you want the user location on the map.
 * shows the map with the route and all the markers
 * @returns a map with geojson
 */
const GetMapPage = (routeId, hasLocation) => {
    const nav = useNavigation();
    const [isPlaying, setPlaying] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [lastCheck, setLastCheck] = useState(true);

    // const fetchData = useCallback(async () => {
    //     let response = await fetch(`${IP}/api/routes/route/${routeId}`);

    //     let json = response.json();

    //     setData(json);
    // });

    //useEffect function which instantly activates code
    useEffect(() => {
        fetch(`${IP}/api/routes/route/${routeId}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        console.log("call");

        setLastCheck(Date.now());

        // const interval = setInterval(() => {
        //     console.log("This will run every second!");
        // }, 1000);
        // return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       console.log('This will run every second!');
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, []);

    const checkRange = (userLocation) => {
        // Check every 5 seconds
        if (Date.now() > lastCheck + 5000) {
            setLastCheck(Date.now());
            // console.log("Now");

            data.poi.forEach((poi) => {
                //Calculate the distance between the current user location and the poi location
                const checkDist = distanceBetween2Points(
                    parseFloat(poi.lat),
                    userLocation.latitude,
                    parseFloat(poi.lon),
                    userLocation.longitude
                );

                if (checkDist > poi.radius) return;

                let myAudio;
                if (!isPlaying) {
                    myAudio = playSound(poi.id);
                    setPlaying(true);
                }
                

                if (myAudio) {
                    console.log(myAudio);
                    // console.log(myAudio.getStatusAsync());
                    myAudio.getStatusAsync().then((result) => {
                        console.log(result);
                    });
                    // audio.getStatusAsync().then((result) => {
                    //     console.log(result.didJustFinish);
                    // });
                }

                // if (sound) {
                // playSound(poi.id)
                //     .getStatusAsync()
                //     .then((result) => {
                //         // console.log(result.didJustFinish);
                //         if (result.didJustFinish) {
                //             setPlaying(false);
                //             sound.unloadAsync();
                //         }
                //     });
                // }

                // else {
                //     if (isPlaying) {
                //         console.log("to close");
                //         playSound(poi.id, checkDist, poi.radius);
                //         setPlaying(false);
                //     }
                // }
            });
        }
    };

    const distanceBetween2Points = (lat1, lat2, lon1, lon2) => {
        const R = 6371e3; // metres
        const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
        const φ2 = (lat2 * Math.PI) / 180;
        const Δφ = ((lat2 - lat1) * Math.PI) / 180;
        const Δλ = ((lon2 - lon1) * Math.PI) / 180;

        const a =
            Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = R * c; // in metres
        return d;
    };

    const playSound = async (poiId) => {
        let response = await fetch(`${IP}/api/poi/${poiId}`);
        let json = await response.json();

        const { sound } = await Audio.Sound.createAsync({
            uri: `data:audio/mp3;base64,${json.audio_src}`,
        });

        console.log("Playing Sound");
        await sound.playAsync();
    };

    //go to the poi page with the given id.
    const onMarkerClick = (name, id) => {
        nav.navigate("PointOfInterestInfoPage", { name: name, poiId: id });
    };

    //return the require with an image for a specific type of poi
    const getImage = (type) => {
        if (type == "INFO") {
            return require("../assets/info.png");
        } else if (type == "POI") {
            return require("../assets/poi.png");
        } else if (type == "CAFE") {
            return require("../assets/coffee.png");
        } else {
            return require("../assets/invis.png");
        }
    };

    //loop through all the POIs and nodes from the route and place them on the map.
    const getMarkers = () => {
        //make an array for all the markers.
        let markers = [];
        //the index for the key of the marker
        let key = 0;
        // console.log(data.route.features[0].geometry.coordinates[0][0]);

        //loop through all the POIs from the database and create a marker with the correct img for the marker on the map.
        for (let i = 0; i < data.poi.length; i++) {
            markers.push(
                <Marker
                    key={key}
                    coordinate={{
                        latitude: parseFloat(data.poi[i].lat),
                        longitude: parseFloat(data.poi[i].lon),
                    }}
                    onPress={() =>
                        onMarkerClick(data.poi[i].name, data.poi[i].id)
                    }
                >
                    <Image
                        style={map.logo}
                        source={getImage(data.poi[i].type)}
                    />
                </Marker>
            );
            key++;
        }

        //loop through all the nodes from the database and create a marker with the number of the node on the map.
        for (let i = 0; i < data.node.length; i++) {
            markers.push(
                <Marker
                    key={key}
                    coordinate={{
                        latitude: parseFloat(data.node[i].lat),
                        longitude: parseFloat(data.node[i].lon),
                    }}
                >
                    <View style={map.node}>
                        <Text style={map.nodeText}>{data.node[i].index}</Text>
                    </View>
                </Marker>
            );
            key++;
        }
        //return all the markers
        return markers;
    };

    //show the map and show the route and the markers
    if (isLoading) return <StatusBar />;

    return (
        <MapView
            style={map.mapView}
            showsUserLocation={hasLocation}
            showsMyLocationButton={hasLocation}
            onUserLocationChange={(locationChangedResult) =>
                checkRange(locationChangedResult.nativeEvent.coordinate)
            }
            initialRegion={{
                latitude: data.route.features[0].geometry.coordinates[0][1],
                longitude: data.route.features[0].geometry.coordinates[0][0],
                latitudeDelta: 0.015,
                longitudeDelta: 0.01,
            }}
        >
            <Geojson
                geojson={data.route}
                strokeColor="red"
                fillColor="green"
                strokeWidth={4}
            />
            {getMarkers()}
        </MapView>
    );
};

export default GetMapPage;
