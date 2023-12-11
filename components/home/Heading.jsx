import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {COLORS, SHADOWS, SIZES,} from "../../constants";
import { Ionicons } from '@expo/vector-icons';
import styles from "./heading.style";
import {useNavigation} from "@react-navigation/native"


export default function Heading() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
            New Rivals
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
            <Ionicons
                name='ios-grid'
                size={24}
                color={COLORS.primary}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}
