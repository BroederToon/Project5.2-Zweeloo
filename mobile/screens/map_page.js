import { Text, View } from "react-native";
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

    useEffect(() => {
        getRoute();
    }, []);

    const getRoute = async () => {
        await fetch("http://192.168.95.220:3000/api/routes/route/1")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };

    const onMarkerClick = (id) => {
        console.log(id);
    }

    const getMarkers = () => {
        let markers = [];
        //POIs
        for (let i = 0; i < data.poi.length; i++) {
            markers.push(
                <Marker
                    key={data.poi[i].id}
                    coordinate={{
                        latitude: parseFloat(data.poi[i].lat),
                        longitude: parseFloat(data.poi[i].lon),
                    }}
                    onPress = {() => onMarkerClick(data.poi[i].id)}
                />
            );
        }
        //Nodes
        for (let i = 0; i < data.node.length; i++) {
            markers.push(
                <Marker
                    key={data.node[i].id}
                    coordinate={{
                        latitude: parseFloat(data.poi[i].lat),
                        longitude: parseFloat(data.poi[i].lon),
                    }}
                />
            );
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
