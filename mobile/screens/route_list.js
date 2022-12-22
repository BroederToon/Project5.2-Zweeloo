import { styles } from "../styles/basic_styles";
import { GetRouteInformation } from "../function/route_list_functions";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/header";
import Border from "../components/border";

/**
 * importing the basic styles and importing the function called GetRouteInformation
 * setting the basic layout for the page and exporting it at the end
 * @returns all the displayable views of the page
 */
const Route_list = (navigate) => {
    const nav = useNavigation();

    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName="Kies een route" />
            <View style={styles.body}>
                <ScrollView
                    contentContainerStyle={{
                        padding: 0,
                        margin: 0,
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    {GetRouteInformation(navigate.route.params.apiCalled)}
                </ScrollView>
            </View>
        </View>
    );
};

export default Route_list;
