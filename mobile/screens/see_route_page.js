import { View, Pressable, Text } from "react-native";
import { styles } from "../styles/basic_styles";
import { see_route } from "../styles/see_route_style";
import GetMapPage from "../function/map_page_function";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/header";
import Border from "../components/border";

const SeeRoutePage = (navigate) => {
    const nav = useNavigation();

    //is false, for no user location on the map.
    const hasLocation = false;

    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName={navigate.route.params.name} disableLogo={true} />
            <View style={styles.body}>
                {GetMapPage(navigate.route.params.routeId, hasLocation)}
                <View style={see_route.buttons}>
                    <Pressable
                        style={see_route.startButton}
                        onPress={() =>
                            nav.navigate("MapPage", {
                                name: navigate.route.params.name,
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
            </View>
        </View>
    );
};

export default SeeRoutePage;
