import { Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";

const Route_type_page = () => {
    const nav = useNavigation();

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Routes</Text>
            <Pressable
                onPress={() =>
                    nav.navigate("RouteList", {
                        apiCalled: "walkroutes",
                        routeType: "Wandelroutes",
                    })
                }
            >
                <Text>Wandelroute</Text>
            </Pressable>
            <Pressable
                onPress={() =>
                    nav.navigate("RouteList", {
                        apiCalled: "bikeroutes",
                        routeType: "Fietsroutes",
                    })
                }
            >
                <Text>Fietsroute</Text>
            </Pressable>
            <Pressable
                onPress={() => nav.navigate("Point_of_interest_info_page")}
            >
                <Text>POI</Text>
            </Pressable>
        </View>
    );
};

export default Route_type_page;
