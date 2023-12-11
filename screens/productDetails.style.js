import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../constants";

const styles = StyleSheet.create({
  containerProduct: {
    flex: 1,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    // aspectRatio : 1,
    resizeMode: "cover",
    width: SIZES.width,
    height: SIZES.width,
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    width: SIZES.width,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    width: SIZES.width -44,
    top: 20,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: SIZES.small,
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "space-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
    paddingHorizontal : SIZES.xSmall,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: "semiBold",
    fontSize: SIZES.large,
  },
  descWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  desc: {
    fontFamily: "medium",
    fontSize: SIZES.large - 2,
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
    marginHorizontal : 12,
  },
  cartRow : {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: SIZES.small,
    width: SIZES.width,
  },
  cartBtn : {
    width : SIZES.width*0.7,
    backgroundColor : COLORS.black,
    padding : SIZES.small/2,
    borderRadius : SIZES.large,
    marginLeft : 12,
  },
  cartTitle : {
    fontFamily : "semiBold",
    fontSize : SIZES.medium,
    color : COLORS.lightWhite,
    marginLeft : SIZES.small,
  },
  addCart : {
    width : 37,
    height : 37,
    borderRadius : 50,
    margin : SIZES.small,
    backgroundColor : COLORS.black,
    justifyContent : "center",
    alignItems : "center",
  }
});

export default styles;
