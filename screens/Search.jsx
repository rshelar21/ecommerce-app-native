import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import styles from "./search.style";
import { Ionicons, Feather } from "@expo/vector-icons";
import {COLORS, SHADOWS, SIZES} from "../constants";

export default function Search() {
  return (
    <SafeAreaView>
     
     <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" 
          size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="What are you looking for"
            onPressIn={() => {}}
            style={styles.searchInput}
            value=""
          />
        </View>
        
      <View>
        <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24}
                color={COLORS.offwhite}
            />
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

