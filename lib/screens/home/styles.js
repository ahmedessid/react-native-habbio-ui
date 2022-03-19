import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    marginHorizontal: 20,
    alignItems: "flex-start",
  },
  homeHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 21,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 15,
    paddingTop: 4,
    lineHeight: 22,
    opacity: 0.65,
  },
  profileContainer: {
    height: 56,
    width: 56,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  newHabitsButton: {
    backgroundColor: "#2C2C2C",
    height: 51,
    paddingHorizontal: 34,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 65
  },
  bannerContainer: {
    width: "100%",
    backgroundColor: "#49497D",
    marginTop: 35,
    marginBottom: 30,
    paddingHorizontal: 60,
    paddingVertical: 25,
    borderRadius: 24,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  leftDecorationCircle: {
    height: 90,
    width: 90,
    borderRadius: 90,
    top: -15,
    left: -30,
    position: "absolute",
    backgroundColor: "rgba(256, 256, 256, 0.03)",
  },
  rightDecorationCircle: {
    height: 90,
    width: 90,
    borderRadius: 90,
    bottom: -25,
    right: -10,
    position: "absolute",
    backgroundColor: "rgba(256, 256, 256, 0.03)",
  },
  leftBannerElements: {
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  percent: {
    fontSize: 18,
    paddingRight: 4,
    fontWeight: "bold",
    color: "#fff",
  },
  bannerTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
    paddingBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: "rgba(256, 256, 256, 0.80)",
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    marginLeft: 10,
  },
  todayHabitsContainer: {
    marginBottom: 6
  },
  itemContainer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    marginTop: 14,
    padding: 8,
    borderRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  itemImageContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 62,
    width: 62,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTextsContainer: {
    width: '70%',
    paddingLeft: 16,
    paddingRight: 16
  },
  itemTextsContainerTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4
  },
  itemTextsContainerSubtitle: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.75)",
  },
  itemCheckContainer:{
    width: 30,
    height:30,
    backgroundColor: "white",
    borderRadius: 30,
    marginRight: 8
  }
});
