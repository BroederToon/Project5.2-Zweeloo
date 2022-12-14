import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Geojson, Marker } from "react-native-maps";
import { map } from "../styles/map_page_styles";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { IP } from "@env";

/**
 * routeId for the id of the route that you want to show.
 * hasLocation if you want the user location on the map.
 * shows the map with the route and all the markers
 * @returns a map with geojson
 */
const GetMapPage = (routeId, hasLocation) => {
    const nav = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    //useEffect function which instantly activates code
    useEffect(() => {
        //call the api, set the response to json and put the json in setData
        fetch(`${IP}/api/routes/route/${routeId}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    });

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
