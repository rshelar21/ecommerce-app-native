import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Ionicons, Fontisto, Feather } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"

export default function Welcome() {
    const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="What are you looking for"
            onPressIn={() => navigation.navigate("Search")}
            style={styles.searchInput}
            value=""
          />
        </View>
        
      <View>
        <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
                name="camera-outline"
                size={SIZES.xLarge}
                color={COLORS.offwhite}
            />
        </TouchableOpacity>
      </View>
      </View>

    </View>
  );
}
