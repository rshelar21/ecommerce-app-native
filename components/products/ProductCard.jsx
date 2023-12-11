import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./productCard.style";
import { Ionicons } from "@expo/vector-icons";
import {COLORS, SHADOWS, SIZES} from "../../constants";
import {useNavigation} from "@react-navigation/native"


export default function ProductCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {navigation.navigate("ProductDetails", {
      item: item
    })}}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {item.supplier}
          </Text>
          <Text style={styles.price}>
           ${item.price}
          </Text>
        </View>


        <TouchableOpacity style={styles.addBtn}>
          <Ionicons
            name="add-circle"
            size={35}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
