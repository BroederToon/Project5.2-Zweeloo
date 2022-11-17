import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/BasicStyles";

const RoutePage = () => {
  const nav = useNavigation();

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Routes</Text>
      <Button title="RouteList" onPress={() => nav.navigate("RouteList")} />
    </View>
  );
};

export default RoutePage;
