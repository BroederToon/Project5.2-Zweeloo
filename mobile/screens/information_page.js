import { Text, View, Pressable } from "react-native";
import { styles } from "../styles/basic_styles";
import { useNavigation } from "@react-navigation/native";

const Information_page = () => {    
    const nav = useNavigation();
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Information</Text>
            <Pressable
                onPress={() =>
                    nav.navigate("SponsorPage")
                }
            ><Text>test</Text></Pressable>
        </View>
    );
};

export default Information_page;
