import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import styles from "./searchText.style";
import {useNavigation} from "@react-navigation/native"


export default function SearchText({ item }) {
    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ProductDetails", {item})}>
        <View style={styles.image}>
          <Image source={{ uri: item?.imageUrl }} style={styles.productImg} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item?.title}</Text>
            <Text style={styles.supplier}>{item?.supplier}</Text>
            <Text style={styles.supplier}>{item?.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
