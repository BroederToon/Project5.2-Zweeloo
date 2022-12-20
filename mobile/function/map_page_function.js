import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import MapView, { Geojson, Marker } from "react-native-maps";
import { map } from "../styles/map_page_styles";
import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
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

    //fetch the data and catch errors
    useEffect(() => {
        fetchData()
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [fetchData]);

    //Fetching the data from the api.
    const fetchData = useCallback(async () => {
        const response = await fetch(`${IP}/api/routes/route/${routeId}`);

        const json = await response.json();
        setData(json);
        console.log("we komen bij de fetchdata");
    }, []);

    //go to the poi page with the given id.
    const onMarkerClick = (id) => {
        console.log(id);
        nav.navigate("Point_of_interest_info_page", { poiId: id });
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
                    onPress={() => onMarkerClick(data.poi[i].id)}
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
    return (
        <View style={styles.innerLayout}>
            <View style={styles.upperLayout}>
                <View style={styles.headerPage}>
                    <View style={styles.inlineIconText}>
                        <Pressable
                            style={{
                                position: "absolute",
                                left: -40,
                                top: 30,
                            }}
                            onPress={() => nav.goBack()}
                        >
                            <FontAwesome5
                                name="arrow-left"
                                size={24}
                                color="#e2030f"
                            />
                        </Pressable>
                        <Text style={styles.title}>{data.name}</Text>
                    </View>
                </View>
            </View>
            {isLoading ? (
                <StatusBar />
            ) : (
                <MapView
                    style={map.mapView}
                    showsUserLocation={hasLocation}
                    showsMyLocationButton={hasLocation}
                    initialRegion={{
                        latitude:
                            data.route.features[0].geometry.coordinates[0][1],
                        longitude:
                            data.route.features[0].geometry.coordinates[0][0],
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
            )}
        </View>
    );
};

export default GetMapPage;
