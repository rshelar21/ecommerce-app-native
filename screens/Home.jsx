import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Carousal, Heading, ProductRow, Welcome } from "../components";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24}/>
          <Text style={styles.location}>Shanhai China</Text>

          <View style={{alignItems : "flex-end"}}>
          <View style={styles.cartCount}>
          <Text style={styles.cartNumber}>0</Text>
          </View>

          <TouchableOpacity>
          <Fontisto name="shopping-bag" size={24}/>
          </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
      <Welcome/>
      <Carousal/>
      <Heading/>
      <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  );
}

