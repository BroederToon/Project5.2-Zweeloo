import { poiInfo } from "../styles/poi_page_styles";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Text, View, Image, ActivityIndicator, Pressable } from "react-native";
import { IP } from "@env";
import { Audio } from "expo-av";

/**
 * This function shows all the information once a user has clicked
 * on a poi, it shows the images, text and the audio that belongs to the poi
 * @param {*} poiId The poiId of the marker that is given along
 * @returns The info of the clicked poi and the images and audio source
 */
export const showPoiInfo = (poiId) => {
    const [sound, setSound] = useState();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //useEffect function which instantly activates code
    useEffect(() => {
        //call the api, set the response to json and put the json in setData
        fetch(`${IP}/api/poi/${poiId}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, []);

    const PlaySound = async () => {
        console.log("Loading Sound");

        const { sound } = await Audio.Sound.createAsync({
            uri: `data:audio/mp3;base64,${data.audio_src}`,
        });

        setSound(sound);

        console.log("Playing Sound");
        sound.playAsync();
    };

    //check whether it's stil loading
    if (isLoading) {
        return <ActivityIndicator size="large" color="#e2030f" />;
    }

    //check whether a message has been send.
    if (data.message) {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>No data to show</Text>
            </View>
        );
    }

    /**
     * loop through the poi images of the belonging poi
     * @returns the images or return nothing
     */
    const showPoiImage = () => {
        if (data.poi_img.length > 0) {
            let myImages = [];
            for (let i = 0; i < data.poi_img.length; i++) {
                myImages.push(
                    <Image
                        style={poiInfo.poiImage}
                        source={{
                            uri: `data:image/png;base64,${data.poi_img[i].src}`,
                        }}
                        key={i}
                    />
                );
            }

            return myImages;
        } else {
            return;
        }
    };

    //return all the information of the poi that has been clicked
    return (
        <View style={poiInfo.layout}>
            {showPoiImage()}
            <Pressable
                style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                }}
                onPress={PlaySound}
            >
                <Feather name="volume-2" size={30} color="black" />
                <Text
                    style={{ marginLeft: 5, textDecorationLine: "underline" }}
                >
                    Lees voor
                </Text>
            </Pressable>
            <Text style={{ fontSize: 15, marginTop: 5 }}>
                {data.description}
            </Text>
        </View>
    );
};
