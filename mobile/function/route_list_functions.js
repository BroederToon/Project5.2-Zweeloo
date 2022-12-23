import { card } from "../styles/route_card_styles";
import { styles } from "../styles/basic_styles";
import React, { useEffect, useState, useCallback } from "react";
import {
    Feather,
    Entypo,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Pressable, Text, View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IP } from "@env";
import Line from "../components/line";

/**
 * @returns the retrieved content and the styling
 */

export const GetRouteInformation = (apiCallParameter) => {
    //make useState of isLoading, setloading to true
    const [isLoading, setLoading] = useState(true);
    //make useState of data, setData to empty array
    const [data, setData] = useState([]);
    const nav = useNavigation();

    //make a component called fetchData with a useCallback function of react and set it async
    //useCallback is used once an action needs to be called several times before sending it of for use
    const fetchData = useCallback(async () => {
        //api call
        const response = await fetch(`${IP}/api/routes/${apiCallParameter}`);

        //set the reponse of the api call to json
        const json = await response.json();

        setData(json);
    }, []);

    console.log("Loading routes");

    //useEffect is a react function which is immediately used
    //it's called everytime there is new data, but also instantly sends data
    //that's why the useCallback function is used so that doesn't happen
    useEffect(() => {
        //call fetch data and show the error if it is has errors and setLoading to false
        fetchData()
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [fetchData]);

    //if true return loadscreen at the top
    if (isLoading) {
        return <ActivityIndicator size="large" color="#e2030f" />;
    }

    //if data has a message instead of normal data return no data to show
    if (data.message) {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>No data to show</Text>
            </View>
        );
    }

    //loop through all the data, set the key in the react fragment
    //and put all the components in an array
    const results = [];

    data.map((route) => {
        results.push(
            <React.Fragment key={route.id}>
                <View style={card.layout}>
                    <View style={card.titleHolder}>
                        <MaterialCommunityIcons
                            name="walk"
                            size={30}
                            color="black"
                        />
                        <Text style={card.routeTitle} numberOfLines={1}>
                            {route.name}
                        </Text>
                    </View>
                    <View style={card.titleHolder} ellipsizeMode="head">
                        <Feather name="info" size={30} color="black" />
                        <Text style={card.routeSubTitle} numberOfLines={1}>
                            {route.extra}
                        </Text>
                    </View>
                    <View style={card.titleHolder}>
                        <Entypo name="direction" size={30} color="black" />
                        <Text style={card.routeSubTitle}>{route.distance}</Text>
                    </View>
                    <View style={card.line} />
                    <Text style={card.routeText} numberOfLines={6}>
                        {route.description}
                    </Text>
                    <View
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                            flexDirection: "row",
                        }}
                    >
                        <Pressable style={card.infoButton}>
                            <Ionicons
                                name="information"
                                size={24}
                                color="black"
                            />
                        </Pressable>
                        <Pressable
                            style={card.cardButton}
                            onPress={() =>
                                nav.navigate("SeeRoute", {
                                    name: route.name,
                                    routeId: route.id,
                                })
                            }
                        >
                            <Text>ZIE ROUTE</Text>
                        </Pressable>
                    </View>
                </View>
                <Line />
            </React.Fragment>
        );
    });

    return results;
};
