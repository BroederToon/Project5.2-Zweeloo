import { styles } from "../styles/basic_styles";
import { GetRouteInformation } from "../function/route_list_functions";
import { Text, View, Image, ScrollView } from "react-native";

/**
 * importing the basic styles and importing the function called GetRouteInformation
 * setting the basic layout for the page and exporting it at the end
 * @returns all the displayable views of the page
 */
const Route_list = () => {
    return (
        <View style={styles.layout}>
            <View style={styles.innerLayout}>
                <View style={styles.upperLayout}>
                    <View style={styles.headerPage}>
                        <Image source={require("../assets/logohighres.png")} />
                        <Text style={styles.title}>Wandel Route</Text>
                        <Text>Kies een route:</Text>
                    </View>
                </View>
                <View style={styles.bottomLayout}>
                    <ScrollView
                        contentContainerStyle={{
                            padding: 0,
                            margin: 0,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {GetRouteInformation()}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Route_list;
