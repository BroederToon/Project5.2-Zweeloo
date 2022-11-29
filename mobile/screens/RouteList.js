import { styles } from "../styles/BasicStyles";
import { card } from "../styles/RouteCardStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";

const RouteList = () => {
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
            <MaterialCommunityIcons name="walk" size={30} color="black" />
            <Text style={card.routeTitle}>Origineel Sweel</Text>
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
              Wat bezielde Max Liebermann, een rijke schilder uit Berlijn, om in
              1882 naar Zweeloo te komen en arme mensen te schilderen? Net als
              veel andere schilders was hij op zoek naar het ongerepte, de
              eenvoud van het leven, de natuur, het mooie landschap en de zo
              speciale lichtval. Hij vond dat in Zweeloo en omgeving. Treed in
              zijn voetsporen, en in die van Vincent van Gogh. Geniet hier van
              de vele historische en goed bewaarde boerderijen, bij het
              landschap passende nieuwe panden én van het landschap zelf. Ontdek
              dat veel van wat indertijd is vastgelegd – en als collectie te
              zien op onze website – nu nog goed herkenbaar aanwezig is. Scan de
              QR-code op de folder en download de pdf met een beschrijving van
              wat u ziet en diverse links naar afbeeldingen en
              achtergrondinformatie. Ideaal om deze vooraf, thuis, of na afloop
              nog eens uitgebreid op uw gemak te bekijken.
            </Text>
            <View style={styles.inlineIconText}>
              <Pressable style={card.cardButton} width="10%">
                <Ionicons name="information" size={24} color="black" />
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

export default RouteList;
