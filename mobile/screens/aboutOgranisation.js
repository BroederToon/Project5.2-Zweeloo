import { Text, View, Pressable } from "react-native";
import { styles } from "../styles/basic_styles";
import { useNavigation } from "@react-navigation/native";
import Border from "../components/border";
import Header from "../components/header";

/**
 * The organisation information page
 * @implements the basic styles and useNavigation
 * @returns the information page
 */
const OrgInfoPage = () => {
    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName="Over de Stichting" />
            <View style={styles.body}>
                <Text
                    style={{
                        width: "80%",
                        heigth: "100%",
                    }}
                >
                    Irure occaecat id aliqua aliquip nulla laboris proident
                    exercitation qui. Adipisicing laborum quis exercitation
                    dolor magna minim qui. Incididunt esse consectetur et
                    nostrud ipsum exercitation pariatur deserunt veniam. Officia
                    cillum ipsum est velit eu est eu laboris enim est amet non
                    commodo quis.
                    {"\n\n"}
                    Adipisicing fugiat commodo id magna aliqua enim sit cillum
                    qui elit. Culpa cillum eiusmod occaecat incididunt aute
                    aliquip nisi sit quis qui aliqua minim minim. Commodo do
                    sint consequat ut labore dolore in. Ad
                    {"\n\n"}
                    sint esse qui veniam dolore elit pariatur adipisicing in
                    reprehenderit ad dolor. Id nulla eiusmod aute aliqua. Sint
                    fugiat fugiat nisi dolore elit duis.
                </Text>
            </View>
        </View>
    );
};

export default OrgInfoPage;
