import { Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import { routeType } from "../styles/route-type-style";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Header from "../components/header";
import Border from "../components/border";

/**
 * The page where the user chooses betweek walking or biking routes
 * @implements the basic and routeType styles, useNavigation
 * @returns the route type page
 */
const Route_type_page = () => {
    const nav = useNavigation();

    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName="Kies een route type" />
            <View style={routeType.buttons}>
                <View style={routeType.typeButton}>
                    <Pressable
                        onPress={() =>
                            nav.navigate("RouteList", {
                                apiCalled: "bikeroutes",
                                routeType: "Fietsroutes",
                            })
                        }
                        style={routeType.bikeButton}
                    >
                        <Ionicons
                            name="bicycle"
                            size={105}
                            color="#333333"
                            style={routeType.icon}
                        />

                        <Text style={routeType.buttonText}>Fietsroutes</Text>
                    </Pressable>
                </View>
                <View style={routeType.typeButton}>
                    <Pressable
                        onPress={() =>
                            nav.navigate("RouteList", {
                                apiCalled: "walkroutes",
                                routeType: "Wandelroutes",
                            })
                        }
                        style={routeType.walkButton}
                    >
                        <FontAwesome5
                            name="walking"
                            size={90}
                            color="#333333"
                            style={routeType.icon}
                        />
                        <Text style={routeType.buttonText}>Wandelroutes</Text>
                    </Pressable>
                </View>
            </View>
            <View style={routeType.info}>
                <Text style={routeType.infoText}>
                    Hier treft u alle activiteiten aan die Stichting
                    Kunstenaarsdorp Zweeloo (mede-)organiseert of waarbij zij
                    betrokken is. Stichting Kunstenaarsdorp Zweeloo heeft echter
                    nog veel meer te bieden.
                </Text>
            </View>
        </View>
    );
};

export default Route_type_page;
