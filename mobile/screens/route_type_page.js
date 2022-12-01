import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";

const Route_type_page = () => {
    const nav = useNavigation();

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Routes</Text>
            <Button
                title="RouteList"
                onPress={() => nav.navigate("RouteList")}
            />
        </View>
    );
};

export default Route_type_page;
