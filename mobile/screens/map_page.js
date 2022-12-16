import { View, Pressable, Text } from "react-native";
import { styles } from "../styles/basic_styles";
import FollowLocation from "../function/follow_location";
import GetMapPage from "../function/map_page_function";
import { map } from "../styles/map_page_styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const MapPage = (navigate) => {
    const hasLocation = true;
    FollowLocation();
    return (
        <View style={styles.layout}>
            {GetMapPage(navigate.route.params.routeId, hasLocation)}
            <Pressable
                style={map.pauseButton}
                onPress={() => console.log("pauzeer")}
            >
                <MaterialIcons name="pause" size={30} color="white" />
            </Pressable>
            <Pressable
                style={map.stopButton}
                onPress={() => console.log("De route gaat stoppen")}
            >
                <Entypo name="cross" size={30} color="white" />
            </Pressable>
        </View>
    );
};

export default MapPage;
