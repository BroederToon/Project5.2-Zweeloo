import { styles } from "../styles/basic_styles";
import { View, ScrollView } from "react-native";
import { showPoiInfo } from "../function/poi_info_page_functions";
import Header from "../components/header";
import Border from "../components/border";

//the component which is needed to show the poi information.
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
                >
                    {showPoiInfo(navigate.route.params.poiId)}
                </ScrollView>
            </View>
        </View>
    );
};

export default PointOfInterestInfoPage;
