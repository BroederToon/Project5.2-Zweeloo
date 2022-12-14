import { View } from "react-native";
import { styles } from "../styles/basic_styles";
import getMapPage from "./../function/map_page_function";
import locationTracking from "./../function/follow_location";

const Map_page = (navigate) => {
    {
        locationTracking();
    }
    return (
        <View style={styles.layout}>
            {getMapPage(navigate.route.params.routeId)}
        </View>
    );
};

export default Map_page;
