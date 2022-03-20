import { StyleSheet } from "react-native";
import { iBlue, iGrey, iPink, iWhite } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    marginTop: 65,
  },
  blueCircleDecoration: {
    position: "absolute",
    top: 100,
    left: 215,
    height: 12,
    width: 12,
    borderRadius: 40,
    backgroundColor: iBlue,
  },
  GreyCircleDecoration: {
    position: "absolute",
    bottom: 120,
    right: 100,
    height: 12,
    width: 12,
    borderRadius: 40,
    backgroundColor: iGrey,
  },
  image: {
    height: 410,
    alignSelf: "center",
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 14,
    marginHorizontal: 60,
    opacity: 0.5,
  },
  button: {
    backgroundColor: iPink,
    marginTop: 50,
    height: 59,
    width: 150,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: iWhite,
  },
});
