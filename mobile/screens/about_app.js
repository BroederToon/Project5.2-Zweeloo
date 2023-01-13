import { Text, View } from "react-native";
import { styles } from "../styles/basic_styles";
import Border from "../components/border";
import Header from "../components/header";

/**
 * The app information page
 * @implements the basic styles
 * @returns the information page
 */
const AppInfoPage = () => {
    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName="Over de App" />
            <View style={styles.body}>
                <Text
                    style={{
                        width: "80%",
                        heigth: "100%",
                    }}
                >
                    Versie: 1.0
                </Text>
            </View>
        </View>
    );
};

export default AppInfoPage;
