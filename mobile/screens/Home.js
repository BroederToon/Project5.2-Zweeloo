import { styles } from "../styles/basic_styles";
import { home } from "../styles/home_styles";
import { Text, Pressable, View, ImageBackground, Image } from "react-native";
import GetLocationPermission from "../function/location_permission";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const nav = useNavigation();
    GetLocationPermission();
    return (
        <View style={styles.layout}>
            <ImageBackground
                source={require("../assets/startBackground.png")}
                style={home.background}
                blurRadius={2}
            >
                <Image
                    source={require("../assets/logohighres.png")}
                    style={home.logo}
                ></Image>
                <View style={home.textOverlayBg}>
                    <Text style={home.textOverlay}>
                        "Geniet van wat hier ooit was en nog steeds is; beleef
                        de natuur en eenvoud van het leven en kijk door de ogen
                        van de kunstenaar…"
                    </Text>
                </View>
                <View style={home.startBar}>
                    <Pressable
                        style={home.startBtn}
                        onPress={() => {
                            nav.navigate("Routes");
                        }}
                    >
                        <Ionicons name="send" size={25} color="black" />
                        <Text style={home.startBtnText}>Start Route</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;
