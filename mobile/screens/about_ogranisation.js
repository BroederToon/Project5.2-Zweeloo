import { Text, View } from "react-native";
import { styles } from "../styles/basic_styles";
import Border from "../components/border";
import Header from "../components/header";

/**
 * The organisation information page
 * @implements the basic styles
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
                    Rond 1800 kwamen er al schilders naar Zweeloo en omliggende
                    esdorpen Aalden, Benneveld, Meppen en Wezup. Waarom? Omdat
                    het hier zo mooi en ongerept was…
                    {"\n"}
                    In de eeuwen daarna volgden er velen, waaronder grote namen
                    als Max Liebermann en Vincent van Gogh. In 2009 werd Zweeloo
                    lid van EuroArt, de Europese federatie van
                    kunstenaarsdorpen, en daarmee officieel een
                    “kunstenaarsdorp”.
                    {"\n"}
                    Om de bijzondere waarden van Zweeloo e.o. voor jong en oud,
                    inwoner, bezoeker en toerist te behouden en actief uit te
                    dragen is eind 2012 stichting Kunstenaarsdorp Zweeloo
                    opgericht, met een verbreding naar kunst in het algemeen.
                    {"\n"}
                    Het bijzondere aan Zweeloo is dat veel van wat er indertijd
                    was en waarvoor kunstenaars kwamen nu nog steeds herkenbaar
                    aanwezig is.
                    {"\n"}
                    Zo is onze “huiskamer”, de kunstenaarsherberg gevestigd in
                    het pand van bistro Tante Sweel, de voormalige herberg van
                    Sweel waar o.a. Max Liebermann logeerde. Het veld achter de
                    herberg is het veld waar hij indertijd zijn beroemde
                    schilderij De Bleek schilderde. En de boomgaard die daarop
                    stond is getekend door Vincent van Gogh die op 1 november
                    1883 naar Zweeloo kwam o.a. om Max Liebermann te ontmoeten.
                    Daarbij tekende Van Gogh ook het kerkje, dat ook nu nog te
                    bezoeken is.
                    {"\n"}
                    Stichting Kunstenaarsdorp organiseert regelmatig exposities
                    en diverse andere activiteiten en heeft een aantal wandel-
                    en fietsroutes ontwikkeld. Neem een kijkje op onze website,
                    bezoek onze art collection, wordt eventueel vriend om op de
                    hoogte te blijven. Maar vooral: kom en geniet van wat hier
                    was en nog steeds is.
                </Text>
            </View>
        </View>
    );
};

export default OrgInfoPage;
