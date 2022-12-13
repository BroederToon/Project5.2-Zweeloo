import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import getMapPage from "./map_page_function";
import getLocationPermission from "./location";

const Map_page = () => {
    const nav = useNavigation();
    return <View style={styles.layout}>{getMapPage()}</View>;
};

export default Map_page;
