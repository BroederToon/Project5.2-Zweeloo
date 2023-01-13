import { styles } from "../styles/basic_styles";
import { GetRouteInformation } from "../function/route_list_functions";
import { View, ScrollView } from "react-native";
import Header from "../components/header";
import Border from "../components/border";

/**
 * Sets the basic layout for the page and loads in all routes
 * @implements the basic styles and the function GetRouteInformation
 * @returns all the displayable views of the page
 */
const Route_list = (navigate) => {
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
                    style={{
                        width: "100%",
                    }}
                >
                    {GetRouteInformation(navigate.route.params.apiCalled)}
                </ScrollView>
            </View>
        </View>
    );
};

export default Route_list;
