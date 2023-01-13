import { View, Image, Pressable, Text } from "react-native";
import { styles } from "../styles/basic_styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Line from "../components/line";

export default function Header(props) {
    const nav = useNavigation();
    return (
        <View
            style={[styles.header, props.disableLogo ? { flex: 0.55 } : null]}
        >
            {/* Zweeloo logo */}
            {props.disableLogo ? null : (
                <Image source={require("../assets/logohighres.png")} />
            )}
            {/* The header bar with the back button and page title */}
            <View style={styles.headerTitle}>
                {/* Back button */}
                <Pressable style={styles.backBtn} onPress={() => nav.goBack()}>
                    <FontAwesome5 name="arrow-left" size={24} color="#e2030f" />
                </Pressable>
                {/* The page title */}
                <Text style={styles.title} numberOfLines={1}>
                    {props.pageName}
                </Text>
            </View>
            <Line />
        </View>
    );
}
