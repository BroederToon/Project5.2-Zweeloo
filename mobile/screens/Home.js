import { styles } from "../styles/basic_styles";
import { Text, View } from "react-native";
import getLocationPermission from "./../function/location_permission";

const Home = () => {
    getLocationPermission();
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>starte</Text>
        </View>
    );
};

export default Home;
