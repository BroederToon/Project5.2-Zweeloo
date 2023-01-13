import { styles } from "../styles/basic_styles";
import { View, ScrollView } from "react-native";
import { showPoiInfo } from "../function/poi_info_page_functions";
import Header from "../components/header";
import Border from "../components/border";

/**
 * The page where the information of a POI is displayed
 * @implements the basic styles, showPoiInfo
 * @returns the POI info page
 */
const PointOfInterestInfoPage = (navigate) => {
    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName={navigate.route.params.name} />
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
                    {showPoiInfo(navigate.route.params.poiId)}
                </ScrollView>
            </View>
        </View>
    );
};

export default PointOfInterestInfoPage;
