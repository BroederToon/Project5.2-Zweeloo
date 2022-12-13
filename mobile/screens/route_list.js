import { styles } from "../styles/basic_styles";
import { GetRouteInformation } from "../function/route_list_functions";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

/**
 * importing the basic styles and importing the function called GetRouteInformation
 * setting the basic layout for the page and exporting it at the end
 * @returns all the displayable views of the page
 */
const Route_list = (navigate) => {
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
                            <Text style={styles.title}>
                                {navigate.route.params.routeType}
                            </Text>
                        </View>
                        <Text>Kies een route:</Text>
                    </View>
                </View>
                <View style={styles.bottomLayout}>
                    <ScrollView
                        contentContainerStyle={{
                            padding: 0,
                            margin: 0,
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        {GetRouteInformation(navigate.route.params.apiCalled)}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Route_list;
