import { Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import { type } from "../styles/route-type-style";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Route_type_page = () => {
    const nav = useNavigation();

    return (
        <View style={styles.layout}>
            <View style={styles.innerLayout}>
                <View style={styles.upperLayout}>
                    <View style={styles.headerPage}>
                        <Image
                            source={require("../assets/logohighres.png")}
                            style={{ marginTop: 25 }}
                        />

                        <View style={styles.inlineIconText}>
                            <Text style={styles.title}>
                                Kies een route type
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={type.buttons}>
                    <View style={type.typeButton}>
                        <Pressable
                            onPress={() =>
                                nav.navigate("RouteList", {
                                    apiCalled: "bikeroutes",
                                    routeType: "Fietsroutes",
                                })
                            }
                            style={type.bikeButton}
                        >
                            <Ionicons
                                name="bicycle"
                                size={105}
                                color="black"
                                style={type.icon}
                            />

                            <Text style={type.buttonText}>Fietsroutes</Text>
                        </Pressable>
                    </View>
                    <View style={type.typeButton}>
                        <Pressable
                            onPress={() =>
                                nav.navigate("RouteList", {
                                    apiCalled: "walkroutes",
                                    routeType: "Wandelroutes",
                                })
                            }
                            style={type.walkButton}
                        >
                            <FontAwesome5
                                name="walking"
                                size={90}
                                color="black"
                                style={type.icon}
                            />
                            <Text style={type.buttonText}>Wandelroutes</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={type.info}>
                    <Text style={type.infoText}>
                        Hier treft u alle activiteiten aan die Stichting
                        Kunstenaarsdorp Zweeloo (mede-)organiseert of waarbij
                        zij betrokken is. Stichting Kunstenaarsdorp Zweeloo
                        heeft echter nog veel meer te bieden.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Route_type_page;
