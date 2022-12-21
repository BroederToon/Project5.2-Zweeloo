import { ActivityIndicator, Pressable, Text, View, Linking, Image, } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { IP } from "@env";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Line from "../components/line";
import { sponsors as sponsorStyle } from "../styles/sponsor_styles";

/**
 * Loads the sponsors from the database
 * @returns an array with sponsors components
 */
export const GetSponsors = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //Get the sponsor data from the database
    const fetchData = useCallback(async () => {
        const response = await fetch(`${IP}/api/sponsors/all`);

        const json = await response.json();

        setData(json);
    }, []);

    //Execute the get sponsor data function on effect
    useEffect(() => {
        fetchData()
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [fetchData]);

    //If the data is still loading return an activityindicator
    if (isLoading) {
        return <ActivityIndicator size="large" color="#e41d18" />;
    }

    //If there is an error, return a text with a message
    if (data.message) {
        return (
            <View>
                <Text style={{ fontSize: 15, color: "#e41d18" }}>
                    Geen data gevonden
                </Text>
            </View>
        );
    }

    let sponsorObjects = [];

    //Loop through all sponsors and generate a tile for it
    data.forEach((sponsor, index) => {
        sponsorObjects.push(
            <React.Fragment key={index}>
                <View style={sponsorStyle.card}>
                    {/* The image or logo for the sponsor */}
                    <Image
                        style={sponsorStyle.image}
                        source={{
                            uri: "data:image/png;base64," + sponsor.logo,
                        }}
                    />
                    {/* The name of the sponsor */}
                    <Text style={sponsorStyle.title}>{sponsor.name}</Text>
                    {/* The location or adress of the sponsor */}
                    <View style={sponsorStyle.location}>
                        {/* Marker icon */}
                        <MaterialCommunityIcons
                            name="map-marker-outline"
                            size={24}
                            color="black"
                        />
                        {/* Sponsor adress */}
                        <Text>{sponsor.adress}</Text>
                    </View>
                    {/* The button to redirect the user to the webpage of the sponsor */}
                    <View style={sponsorStyle.buttonHolder}>
                        <Pressable
                            style={sponsorStyle.button}
                            onPress={() => Linking.openURL(sponsor.link)}
                        >
                            <Text style={sponsorStyle.buttonTxt}>
                                Ga naar website
                            </Text>
                        </Pressable>
                    </View>
                </View>
            <Line />
            </React.Fragment>
        );
    });

    return sponsorObjects;
};
