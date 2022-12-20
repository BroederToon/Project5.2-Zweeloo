import { ActivityIndicator, Pressable, Text, View } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { IP } from "@env";

import { sponsors } from "../styles/sponsor_styles";

export const GetSponsors = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch(`${IP}/api/sponsors/all`);

        const json = await response.json();

        setData(json);
    }, []);

    useEffect(() => {
        fetchData()
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [fetchData]);

    if (isLoading) {
        return <ActivityIndicator />;
    }

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

    data.forEach((sponsor, index) => {
        console.log(sponsor);
        sponsorObjects.push(
            <React.Fragment key={index}>
                <View style={sponsors.card}>
                    <Text>test</Text>
                </View>
            </React.Fragment>
        );
    });

    return sponsorObjects;
};
