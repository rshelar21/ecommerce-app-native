import {StyleSheet} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    headerTitle : {
        fontFamily : "semiBold",
        fontSize : SIZES.xLarge -2,
    },
    header : {
        flexDirection : "row",
        justifyContent :"space-between",
    },
    container : {
        marginTop : SIZES.medium,
        marginHorizontal : 12,
    },
});

export default styles;