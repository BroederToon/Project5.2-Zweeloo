import { Text, View, Pressable, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { GetSponsors } from "../function/get_sponsors";

const SponsorPage = () => {
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
                            <Text style={styles.title}>Sponsoren</Text>
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
                        style = {{
                            width: "100%",
                            backgroundColor: "blue"
                        }}
                    >
                        {GetSponsors()}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default SponsorPage;
