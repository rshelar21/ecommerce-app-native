import {StyleSheet} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../constants";


const styles = StyleSheet.create({
    appBarWrapper : {
        marginHorizontal : 22,
        marginTop : SIZES.small,
    },
    appBar : {
        // flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    location : {
        fontFamily : "semiBold",
        color : COLORS.gray,
        fontSize : SIZES.medium,
    },
    cartCount  : {
        position : "absolute",
        bottom : 16,
        width : 16,
        height : 16,
        borderRadius : 6,
        zIndex : 999,
        backgroundColor : "green",
        alignItems : "center",
        justifyContent : "center",
    },
    cartNumber : {
        fontFamily : "regular",
        fontWeight : "600",
        fontSize : 10,
        color : COLORS.lightWhite
    },
});

export default styles;