import { View } from "react-native";
import { styles } from "../styles/basic_styles";
import FollowLocation from "../function/follow_location";
import GetMapPage from "../function/map_page_function";

const MapPage = (navigate) => {
    const hasLocation = true;
    FollowLocation();
    return (
        <View style={styles.layout}>
            {GetMapPage(navigate.route.params.routeId, hasLocation)}
        </View>
    );
};

export default MapPage;
