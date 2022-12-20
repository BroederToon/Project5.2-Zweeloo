import { styles } from "../styles/basic_styles";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { showPoiInfo } from "../function/point_of_interest_info_page_functions";

//the component which is needed to show the poi information.
const Point_of_interest_info_page = (navigate) => {
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
                            <Text style={styles.title}>Terug naar kaart</Text>
                        </View>
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
                        {showPoiInfo(navigate.route.params.poiId)}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Point_of_interest_info_page;
