import { styles } from "../styles/basic_styles";
import { Text, View } from "react-native";
import Border from "../components/border";
import Header from "../components/header";

const Option_page = () => {
    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName="Instellingen" />
            <View style={styles.body}>
                <Text style={styles.title}>Option</Text>
            </View>
        </View>
    );
};

export default Option_page;
