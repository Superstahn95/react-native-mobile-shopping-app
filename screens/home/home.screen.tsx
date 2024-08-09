import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import LogoText from "@/components/logoText/LogoText";
import Promo from "@/components/promo/Promo";
import SearchField from "@/components/searchField/SearchField";
import Categories from "./components/Categories";
import Products from "./components/Products";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, { padding: 16 }]}>
        <LogoText fontSize={24} />
        {/* search field */}
        <View style={styles.searchContainer}>
          <SearchField />
          <TouchableOpacity style={styles.filterContainer}>
            <Image source={require("@/assets/images/filter.png")} />
          </TouchableOpacity>
        </View>
        <Promo />
        {/* categories */}
        <Categories />
        {/* products */}
        <Products />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: "relative",
    flexDirection: "row",
    // backgroundColor: "green",
    paddingVertical: 12,
  },
  filterContainer: {
    borderRadius: 8,
    borderColor: "#B3B3B3",
    borderWidth: 1,
    borderStyle: "solid",
    height: 54,
    width: 54,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 39,
  },
});
