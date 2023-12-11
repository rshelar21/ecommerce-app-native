import { ActivityIndicator, Text, View , FlatList} from 'react-native'
import React from 'react'
import useFetch from "../../hooks/useFetch"
import { COLORS, SIZES } from '../../constants';
import ProductCard from './ProductCard';
import styles from "./productList.style";
export default function ProductList() {
    const {data, error, isLoading} = useFetch();
    if(isLoading){
        return (
            <View style={styles.loadingContainer}>
            <ActivityIndicator
                size={SIZES.xxLarge}
                color={COLORS.primary}
            />
        </View>
        )
    }

    return (
        <View style={styles.container}>
        <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => <ProductCard item={item}/>}
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={() =>
            <View style={styles.seperator}/>
            }
        />
        </View>
    )
}

