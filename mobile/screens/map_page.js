import { View, Pressable } from "react-native";
import { styles } from "../styles/basic_styles";
import FollowLocation from "../function/follow_location";
import GetMapPage from "../function/map_page_function";
import { map } from "../styles/map_page_styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Header from "../components/header";
import Border from "../components/border";

/**
 * The page where a user can follow a route
 * @implements the basic and map styles, GetMapPage and FollowLocation
 * @returns the follow route page
 */
const MapPage = (navigate) => {
    //Is true, for the user location on the map
    const hasLocation = true;

    FollowLocation();

    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName={navigate.route.params.name} disableLogo={true} />
            <View style={styles.body}>
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
        </View>
    );
};

export default MapPage;
