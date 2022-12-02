import { styles } from "../styles/basic_styles";
import { card } from "../styles/route_card_styles";
import React, { useEffect, useState, useCallback } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Pressable, Image } from "react-native";

const getRouteInformation = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch("http://10.232.0.114:3000/api/routes/all");

        const json = await response.json();

        if (!json.length >= 0) {
            setData(json);
        }
    }, []);

    useEffect(() => {
        fetchData()
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [fetchData]);

    return data;
};

const showingRouteInformation = () => {
    for (let routeData of getRouteInformation()) {
        return (
            <View style={card.layout}>
                <View style={styles.inlineIconText}>
                    <MaterialCommunityIcons
                        name="walk"
                        size={30}
                        color="black"
                    />
                    <Text style={card.routeTitle}>{routeData.name}</Text>
                </View>
                <View style={styles.inlineIconText}>
                    <Feather name="info" size={30} color="black" />
                    <Text style={card.routeSubTitle}>
                        {routeData.extra}
                        {/* Kunst- en Landschapswandeling */}
                    </Text>
                </View>
                <View style={styles.inlineIconText}>
                    <Entypo name="direction" size={30} color="black" />
                    <Text style={card.routeSubTitle}>{routeData.distance}</Text>
                </View>
                <View style={card.bottomLayout}>
                    <Text style={card.routeText}>
                        {routeData.description}
                        {/* Wat bezielde Max Liebermann, een rijke schilder uit
                        Berlijn, om in 1882 naar Zweeloo te komen en arme mensen
                        te schilderen? Net als veel andere schilders was hij op
                        zoek naar het ongerepte, de eenvoud van het leven, de
                        natuur, het mooie landschap en de zo speciale lichtval.
                        Hij vond dat in Zweeloo en omgeving. Treed in zijn
                        voetsporen, en in die van Vincent van Gogh. Geniet hier
                        van de vele historische en goed bewaarde boerderijen,
                        bij het landschap passende nieuwe panden én van het
                        landschap zelf. Ontdek dat veel van wat indertijd is
                        vastgelegd – en als collectie te zien op onze website –
                        nu nog goed herkenbaar aanwezig is. Scan de QR-code op
                        de folder en download de pdf met een beschrijving van
                        wat u ziet en diverse links naar afbeeldingen en
                        achtergrondinformatie. Ideaal om deze vooraf, thuis, of
                        na afloop nog eens uitgebreid op uw gemak te bekijken. */}
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
        );
    }
};

const Route_list = () => {
    // for (let routeData of getRouteInformation()) {
    //     console.log(routeData);
    // }

    return (
        <View style={styles.layout}>
            <View style={styles.innerLayout}>
                <View style={styles.headerPage}>
                    <Image source={require("../assets/logohighres.png")} />
                    <Text style={styles.title}>Wandel Route</Text>
                    <Text>Kies een route:</Text>
                </View>
                {showingRouteInformation()}
            </View>
        </View>
    );
};

export default Route_list;
