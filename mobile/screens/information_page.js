import { Text, View, Pressable } from "react-native";
import { styles } from "../styles/basic_styles";
import { useNavigation } from "@react-navigation/native";

const Information_page = () => {    
    const nav = useNavigation();
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Information</Text>
            <Pressable style={{width: 100, height: 50}}
                onPress={() =>
                    nav.navigate("SponsorPage")
                }
            ><Text>Zie sponsoren</Text></Pressable>
        </View>
    );
};

export default Information_page;
