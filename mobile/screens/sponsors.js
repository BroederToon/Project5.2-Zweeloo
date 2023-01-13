import { View, ScrollView } from "react-native";
import { styles } from "../styles/basic_styles";
import { GetSponsors } from "../function/get_sponsors";
import Header from "../components/header";
import Border from "../components/border";

/**
 * The page with the sponsor overview
 * @implements the basic styles and GetSponsors
 * @returns the sponsor page
 */
const SponsorPage = () => {
    return (
        <View style={styles.layout}>
            <Border />
            <Header pageName="Sponsoren" />
            <View style={styles.body}>
                <ScrollView
                    contentContainerStyle={{
                        padding: 0,
                        margin: 0,
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                    style={{
                        width: "100%",
                    }}
                >
                    {/* Generate the sponsor tiles */}
                    {GetSponsors()}
                </ScrollView>
            </View>
        </View>
    );
};

export default SponsorPage;
