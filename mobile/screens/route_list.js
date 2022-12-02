import { styles } from "../styles/basic_styles";
import { card } from "../styles/route_card_styles";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Pressable, Image } from "react-native";

const getRouteInformation = async () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://10.232.0.114:3000/api/routes/all")
            .then((response) => response.json())
            .then((JSON) => setData(JSON))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        console.log(data);
    }, []);
    // je leest dit wel uit, maar je moet er nog een keer doorheen
    // aangezien je het uitleest als als array dus nog een keer door heen loopen
    // en stop de html er dan tegelijk in voor het herhalen van de card

    if (isLoading) {
        return <Text>Laden...</Text>;
    } else {
        return data;
    }
};

const Route_list = () => {
    return (
        <View style={styles.layout}>
            <View style={styles.innerLayout}>
                <View style={styles.headerPage}>
                    <Image source={require("../assets/logohighres.png")} />
                    <Text style={styles.title}>Wandel Route</Text>
                    <Text>Kies een route:</Text>
                </View>
                <View style={card.layout}>
                    <View style={styles.inlineIconText}>
                        <MaterialCommunityIcons
                            name="walk"
                            size={30}
                            color="black"
                        />
                        <Text style={card.routeTitle}>
                            {getRouteInformation().name}
                        </Text>
                    </View>
                    <View style={styles.inlineIconText}>
                        <Feather name="info" size={30} color="black" />
                        <Text style={card.routeSubTitle}>
                            Kunst- en Landschapswandeling
                        </Text>
                    </View>
                    <View style={styles.inlineIconText}>
                        <Entypo name="direction" size={30} color="black" />
                        <Text style={card.routeSubTitle}>* 6,3 km.</Text>
                    </View>
                    <View style={card.bottomLayout}>
                        <Text style={card.routeText}>
                            Wat bezielde Max Liebermann, een rijke schilder uit
                            Berlijn, om in 1882 naar Zweeloo te komen en arme
                            mensen te schilderen? Net als veel andere schilders
                            was hij op zoek naar het ongerepte, de eenvoud van
                            het leven, de natuur, het mooie landschap en de zo
                            speciale lichtval. Hij vond dat in Zweeloo en
                            omgeving. Treed in zijn voetsporen, en in die van
                            Vincent van Gogh. Geniet hier van de vele
                            historische en goed bewaarde boerderijen, bij het
                            landschap passende nieuwe panden én van het
                            landschap zelf. Ontdek dat veel van wat indertijd is
                            vastgelegd – en als collectie te zien op onze
                            website – nu nog goed herkenbaar aanwezig is. Scan
                            de QR-code op de folder en download de pdf met een
                            beschrijving van wat u ziet en diverse links naar
                            afbeeldingen en achtergrondinformatie. Ideaal om
                            deze vooraf, thuis, of na afloop nog eens uitgebreid
                            op uw gemak te bekijken.
                        </Text>
                        <View style={styles.inlineIconText}>
                            <Pressable style={card.cardButton} width="10%">
                                <Ionicons
                                    name="information"
                                    size={24}
                                    color="black"
                                />
                            </Pressable>
                            <Pressable style={card.cardButton} width="80%">
                                <Text>ZIE ROUTE</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Route_list;
