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
        top : SIZES.large,
        zIndex : 999
    },
    heading : {
        
    }
});
export default styles;