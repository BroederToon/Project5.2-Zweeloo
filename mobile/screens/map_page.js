import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import MapView, { Geojson, Marker } from "react-native-maps";
import { map } from "../styles/map_page_styles";
import { useEffect, useState } from "react";

const Map_page = () => {
    const nav = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getRoute();
        console.log(data.poi);
        console.log(data.poi.length);
    }, []);

    const getRoute = async () => {
        fetch("http://10.232.14.4:3000/api/routes/route/1")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };

    const getPOI = () => {
        for (let i = 0; i < data.poi.length; i++) {
            return <Marker key={data.poi[i].id} />;
        }
    };

    return (
        <View style={styles.layout}>
            <View style={styles.innerLayout}>
                <View style={styles.headerPage}>
                    <Text style={styles.title}>{data.name}</Text>
                </View>
                <MapView
                    style={map.mapView}
                    initialRegion={{
                        latitude: 52.784155118378585,
                        longitude: 6.907284749200984,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                >
                    <Geojson
                        geojson={data.route}
                        strokeColor="red"
                        fillColor="green"
                        strokeWidth={4}
                    />
                </MapView>
            </View>
        </View>
    );
};

export default Map_page;
