import { styles } from "../styles/basic_styles";
import { poiInfo } from "../styles/poi_page_styles";
import React, { useEffect, useState, useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View, Image } from "react-native";

const loadScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>isLoading...</Text>
        </View>
    );
};

export const showPoiInfo = (poiId) => {
    console.log(poiId);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch(
            `http://10.232.13.234:3000/api/poi_img/poi/${poiId}`
        );

        const json = await response.json();

        setData(json);
    }, []);

    useEffect(() => {
        fetchData()
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [fetchData]);

    if (isLoading) {
        return loadScreen();
    }

    // if (data.message) {
    //     return (
    //         <View>
    //             <Text style={{ fontSize: 30 }}>No data to show</Text>
    //         </View>
    //     );
    // }

    console.log(data);

    return (
        <View style={poiInfo.layout}>
            <View style={styles.inlineIconText}>
                <Text style={poiInfo.poiTitle}>Klooster nr 5</Text>
                <Feather
                    name="volume-2"
                    size={30}
                    color="black"
                    style={{
                        position: "absolute",
                        left: 225,
                    }}
                />
            </View>
            <Image
                source={require("../assets/44207-b580.jpg")}
                style={poiInfo.poiImage}
            />
            <Text style={{ fontSize: 15, marginTop: 10 }}>
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
        </View>
    );
};
