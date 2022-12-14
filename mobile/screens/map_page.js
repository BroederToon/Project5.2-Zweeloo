import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import getMapPage from "./../function/map_page_function";
import getLocationPermission from "./../function/location_permission";
import locationTracking from "./../function/follow_location";

const Map_page = (navigate) => {
    const nav = useNavigation();
    {
        getLocationPermission();
        locationTracking();
    }
    return (
        <View style={styles.layout}>
            {getMapPage(navigate.route.params.routeId)}
        </View>
    );
};

export default Map_page;
