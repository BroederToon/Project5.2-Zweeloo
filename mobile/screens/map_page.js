import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import MapView, { Geojson, Marker } from "react-native-maps";
import { map } from "../styles/map_page_styles";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

const Map_page = () => {
    const nav = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [string, setString] = useState(null);

    useEffect(() => {
        getRoute();
    }, []);

    const getRoute = async () => {
        await fetch("http://10.232.0.243:3000/api/routes/route/1")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };

    const onMarkerClick = (id) => {
        console.log(id);
    };

    const getImage = (type) => {
        if (type == "INFO") {
            setString("../assets/info.png");
            return;
        } else if (type == "POI") {
            setString("../assets/poi.png");
            return;
        } else if (type == "INVIS") {
            setString("nisk");
            return;
        } else if (type == "CAFE") {
            setString("../assets/Cafe.png");
            return;
        } else {
            setString("niks");
            return;
        }
    };

    const getMarkers = () => {
        let markers = [];
        let index = 0;
        console.log(data.poi.length);
        //POIs
        for (let i = 0; i < data.poi.length; i++) {
            getImage(data.poi[i].type);
            console.log(data.poi[i].type);
            markers.push(
                <Marker
                    key={index}
                    coordinate={{
                        latitude: parseFloat(data.poi[i].lat),
                        longitude: parseFloat(data.poi[i].lon),
                    }}
                    onPress={() => onMarkerClick(data.poi[i].id)}
                >
                    <Image
                        style={map.logo}
                        source={require("../assets/Cafe.png")}
                    />
                </Marker>
            );
            index++;
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

    return (
        <View style={styles.layout}>
            <View style={styles.innerLayout}>
                <View style={styles.headerPage}>
                    <Text style={styles.title}>{data.name}</Text>
                </View>
                {isLoading ? (
                    <StatusBar />
                ) : (
                    <MapView
                        style={map.mapView}
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
        </View>
    );
};

export default Map_page;
