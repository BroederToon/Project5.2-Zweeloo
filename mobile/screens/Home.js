import { styles } from "../styles/basic_styles";
import { Text, View } from "react-native";
import GetLocationPermission from "../function/location_permission";

const Home = () => {
    GetLocationPermission();
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>starte</Text>
        </View>
    );
};

export default Home;
