import { Text, View, Pressable } from "react-native";
import { styles } from "../styles/basic_styles";
import { infoStyles } from "../styles/info_styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Border from "../components/border";
import Header from "../components/header";

/**
 * The information page of the app
 * @implements the basic and info styles and useNavigation
 * @returns the information page
 */
const InformationPage = () => {
    const nav = useNavigation();
    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName="Informatie" />
            <View style={styles.body}>
                <Pressable
                    style={infoStyles.btn}
                    onPress={() => nav.navigate("AppInfoPage")}
                >
                    <Ionicons
                        name="information-circle"
                        size={50}
                        color="#333333"
                    />
                    <Text style={infoStyles.btnTxt}>Over de app &gt;</Text>
                </Pressable>
                <Pressable
                    style={infoStyles.btn}
                    onPress={() => nav.navigate("OrgInfoPage")}
                >
                    <Ionicons
                        name="information-circle"
                        size={50}
                        color="#333333"
                    />
                    <Text style={infoStyles.btnTxt}>
                        Over de stichting &gt;
                    </Text>
                </Pressable>
                <Pressable
                    style={infoStyles.btn}
                    onPress={() => nav.navigate("SponsorPage")}
                >
                    <Ionicons
                        name="information-circle"
                        size={50}
                        color="#333333"
                    />
                    <Text style={infoStyles.btnTxt}>Sponsoren &gt;</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default InformationPage;
