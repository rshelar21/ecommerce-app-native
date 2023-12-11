import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import styles from "./search.style";
import { Ionicons, Feather } from "@expo/vector-icons";
import {COLORS, SHADOWS, SIZES} from "../constants";
import axios from 'axios';
import {SearchText} from '../components';

export default function Search() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async() => {
    console.log(search);
    try{
      const res = await axios.get(`http://192.168.0.105:3000/api/products/search/${search}`)
      console.log(res.data);
      setSearchResults(res.data);
    } catch(error){
      console.log(error);
    }
  }
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
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>
        
      <View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
            <Feather name="search" size={24}
                color={COLORS.offwhite}
            />
        </TouchableOpacity>
      </View>
      </View>

      {
        searchResults.length === 0 ? (
          <View>
            <Image
              source={
                require('../assets/images/Pose23.png')
              }
              style={styles.serchImg}
            />
          </View>
        ) : (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => (
             <SearchText item={item} />
            )}
            style={{marginHorizontal : 12}}
          />
        )
      }
    </SafeAreaView>
  )
}

