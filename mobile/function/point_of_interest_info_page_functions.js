import { card } from "../styles/route_card_styles";
import { styles } from "../styles/basic_styles";
import { poiInfo } from "../styles/poi_page_styles";
import React, { useEffect, useState, useCallback } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

const loadScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>isLoading...</Text>
        </View>
    );
};

export const showPoiInfo = () => {
    return (
        <View style={card.layout}>
            <View style={styles.inlineIconText}>
                <Text style={card.routeTitle}>Klooster nr 5</Text>
                <MaterialCommunityIcons name="walk" size={30} color="black" />
            </View>
            <View style={styles.inlineIconText} ellipsizeMode="head">
                <Feather name="info" size={30} color="black" />
                <Text style={card.routeSubTitle}>Marion Mencke</Text>
            </View>
            <View style={styles.inlineIconText}>
                <Entypo name="direction" size={30} color="black" />
                <Text style={card.routeSubTitle}>Zweeloo</Text>
            </View>
            <View style={card.bottomLayout} />
            <Text style={{ fontSize: 15, marginTop: 10, lineHeight: 13 }}>
                Wat bezielde Max Liebermann, een rijke schilder uit Berlijn, om
                in 1882 naar Zweeloo te komen en arme mensen te schilderen? Net
                als veel andere schilders was hij op zoek naar het ongerepte, de
                eenvoud van het leven, de natuur, het mooie landschap en de zo
                speciale lichtval. Hij vond dat in Zweeloo en omgeving. Treed in
                zijn voetsporen, en in die van Vincent van Gogh. Geniet hier van
                de vele historische en goed bewaarde boerderijen, bij het
                landschap passende nieuwe panden én van het landschap zelf.
                Ontdek dat veel van wat indertijd is vastgelegd – en als
                collectie te zien op onze website – nu nog goed herkenbaar
                aanwezig is. Scan de QR-code op de folder en download de pdf met
                een beschrijving van wat u ziet en diverse links naar
                afbeeldingen en achtergrondinformatie. Ideaal om deze vooraf,
                thuis, of na afloop nog eens uitgebreid op uw gemak te bekijken.
            </Text>
            <View style={styles.inlineIconText}>
                <View
                    style={{
                        width: "100%",
                        justifyContent: "space-between",
                        flexDirection: "row",
                    }}
                >
                    <Pressable style={card.infoButton}>
                        <Ionicons name="information" size={24} color="black" />
                    </Pressable>
                    <Pressable style={card.cardButton}>
                        <Text>ZIE ROUTE</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};
