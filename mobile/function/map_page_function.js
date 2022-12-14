import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import MapView, { Geojson, Marker } from "react-native-maps";
import { map } from "../styles/map_page_styles";
import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";

/*
 * shows the map with the route and all the markers
 *@returns a map with geojson
 */
const getMapPage = (routeId) => {
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
        const response = await fetch(
            "http://10.232.15.11:3000/api/routes/route/" + routeId
        );

        const json = await response.json();
        setData(json);
    }, []);

    //go to the poi page with the given id.
    const onMarkerClick = (id) => {
        console.log(id);
        nav.navigate("poi_page", { poiId: id });
    };

    //show the icon from the specific type.
    const getImage = (type) => {
        if (type == "INFO") {
            return (
                <Image
                    style={map.logo}
                    source={require("../assets/info.png")}
                />
            );
        } else if (type == "POI") {
            return (
                <Image style={map.logo} source={require("../assets/poi.png")} />
            );
        } else if (type == "INVIS") {
            return (
                <Image
                    style={map.logo}
                    source={require("../assets/invis.png")}
                />
            );
        } else if (type == "CAFE") {
            return (
                <Image
                    style={map.logo}
                    source={require("../assets/coffee.png")}
                />
            );
        } else {
            return;
        }
    };

    //loop through all the POIs and nodes from the route and place them on the map.
    const getMarkers = () => {
        let markers = [];
        let index = 0;
        //POIs
        if (data.poi.length != null) {
            for (let i = 0; i < data.poi.length; i++) {
                markers.push(
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: parseFloat(data.poi[i].lat),
                            longitude: parseFloat(data.poi[i].lon),
                        }}
                        onPress={() => onMarkerClick(data.poi[i].id)}
                    >
                        {getImage(data.poi[i].type)}
                    </Marker>
                );
                index++;
            }
        }
        //Nodes
        for (let i = 0; i < data.node.length; i++) {
            markers.push(
                <Marker
                    key={index}
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
            index++;
        }
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
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    initialRegion={{
                        latitude: 52.794703304265546,
                        longitude: 6.72937774862828,
                        latitudeDelta: 0.01,
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

export default getMapPage;
