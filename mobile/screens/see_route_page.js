import { View, Pressable, Text } from "react-native";
import { styles } from "../styles/basic_styles";
import { see_route } from "../styles/see_route_style";
import GetMapPage from "../function/map_page_function";
import { useNavigation } from "@react-navigation/native";

const SeeRoutePage = (navigate) => {
    const nav = useNavigation();

    //is false, for no user location on the map.
    const hasLocation = false;

    return (
        <View style={styles.layout}>
            {GetMapPage(navigate.route.params.routeId, hasLocation)}
            <Pressable
                style={see_route.startButton}
                onPress={() =>
                    nav.navigate("MapPage", {
                        routeId: navigate.route.params.routeId,
                    })
                }
            >
                <Text style={see_route.textButton}>Start Route</Text>
            </Pressable>
            <Pressable
                style={see_route.backButton}
                onPress={() => nav.goBack()}
            >
                <Text style={see_route.textButton}>Terug</Text>
            </Pressable>
        </View>
    );
};

export default SeeRoutePage;
