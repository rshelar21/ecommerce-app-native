import {StyleSheet} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../constants";


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor  : COLORS.lightWhite
    },
    wrapper : {
        flex : 1,
        backgroundColor  : COLORS.lightWhite
    },
    upperRow : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        paddingHorizontal : SIZES.large,
        width : SIZES.width-50,
        position : 'absolute',
        backgroundColor  : COLORS.primary,
        borderRadius : SIZES.large,
        top : SIZES.large+20,
        zIndex : 999,
        marginHorizontal : SIZES.large,
    },
    heading : {
        fontFamily : "semiBold",
        fontSize : SIZES.medium,
        color : COLORS.lightWhite,
        marginLeft : 5,
    }
});
export default styles;