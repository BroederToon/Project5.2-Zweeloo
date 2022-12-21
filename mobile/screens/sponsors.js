import { View, ScrollView } from "react-native";
import { styles } from "../styles/basic_styles";
import { GetSponsors } from "../function/get_sponsors";
import Header from "../components/header";

const SponsorPage = () => {
    return (
        <View style={styles.layout}>
            <View style={styles.innerLayout}>
                <Header pageName="Sponsors" />
                <View style={styles.bottomLayout}>
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
        </View>
    );
};

export default SponsorPage;
