import {StyleSheet} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container : {
        width : "100%",
    },
    welcomeText : (color, top) => ({
        fontFamily : "bold",
        fontSize : SIZES.xxLarge -6,
        color : color,
        marginHorizontal : SIZES.small,
        marginTop : top,
    }),
    searchContainer: {
        flexDirection : "row",
        justifyContent : "center",
        alignContent : "center",
        backgroundColor :  COLORS.secondary,
        borderRadius : SIZES.medium,
        marginVertical : SIZES.medium,
        height : 50,
        marginHorizontal : SIZES.small,
    },
    searchIcon : {
        color : COLORS.gray,
        marginHorizontal : 10,
        marginTop : SIZES.small,
    },
    searchWrapper : {
        flex : 1,
        backgroundColor :  COLORS.secondary,
        borderRadius : SIZES.small,
        marginRight : SIZES.small,
    },
    searchInput : {
        fontFamily : "regular",
        width : "100%",
        height : "100%",
        paddingHorizontal : SIZES.small
    },
    searchBtn : {
        backgroundColor : COLORS.primary,
        width : 50,
        height : "100%",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : SIZES.medium,
    }
});


export default styles;