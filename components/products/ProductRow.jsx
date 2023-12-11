import { Text, View, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ProductCard from "./ProductCard";
import styles from "./productRow.style";
import useFetch from "../../hooks/useFetch";

export default function ProductRow() {
  const { error, data, isLoading } = useFetch();
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={products}
          horizontal
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCard item={item}/>}
          contentContainerStyle={{
            columnGap: SIZES.medium,
          }}
        />
      )}
    </View>
  );
}
