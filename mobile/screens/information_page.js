import { Text, View, Pressable } from "react-native";
import { styles } from "../styles/basic_styles";
import { useNavigation } from "@react-navigation/native";
import Border from "../components/border";
import Header from "../components/header";

const Information_page = () => {
    const nav = useNavigation();
    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName="Informatie" />
            <View style={styles.body}>
                <Pressable
                    style={{ width: 100, height: 50 }}
                    onPress={() => nav.navigate("SponsorPage")}
                >
                    <Text>Zie sponsoren</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Information_page;
