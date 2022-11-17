import { styles } from "../styles/BasicStyles";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
} from "react-native";

const RouteList = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>List with Routes</Text>
    </View>
  );
};

export default RouteList;
