import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./newRivals.style";
import {
  Ionicons,
} from "@expo/vector-icons";


export default function NewRivals() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" 
            size={30} 
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.heading}> Products</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
