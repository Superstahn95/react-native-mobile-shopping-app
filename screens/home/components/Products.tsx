import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "@/components/productCard/ProductCard";
import { products } from "@/assets/staticData";

export default function Products() {
  return (
    <View style={{ marginTop: 14 }}>
      {/* <Text>Products</Text> */}
      <FlatList
        data={products}
        // key={Math.ceil(products.length / 2) ?? 4}
        // keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => (
          <ProductCard
            image={item.image}
            gender={item.gender}
            price={item.price}
            description={item.description}
            name={item.name}
            index={index}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    // justifyContent: "space-between", // Align items with equal spacing
  },
});
