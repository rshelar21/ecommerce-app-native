import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from "react-native-image-slider-box"
import {COLORS} from "../../constants"
import fn1 from "../../assets/images/fn1.jpg";
import fn2 from "../../assets/images/fn2.jpg";
import fn3 from "../../assets/images/fn3.jpg";

  

export default function Carousal() {
    const slides = [
    fn1,
    fn2,
    fn3,
    ]
  return (
    <View style={styles.carousalContainer}>
    {
        slides &&
    
    <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.gray}
        autoplay
        ImageComponentStyle={{borderRadius : 15,
        width : "95%",
        marginTop : 15,}}
        circleLoop
    />
    }
    </View>
  )
}

const styles = StyleSheet.create({
    carousalContainer : {
        flex : 1,
        alignItems : "center",
    }
});
