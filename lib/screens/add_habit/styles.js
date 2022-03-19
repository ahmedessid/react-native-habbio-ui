import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "flex-start",
  },
  titlesContainer: {
    marginBottom: 20,
    paddingHorizontal: 22,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    paddingTop: 10,
    lineHeight: 22,
    opacity: 0.65,
  },
  greyContainer: {
    height: 10,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.025)",
  },
  decorationsContainer: {
    flexDirection: "row",
  },
  decorationContainer: {
    height: 6,
    width: 60,
  },
  habbitInputContainer: {
    marginTop: 35,
    width: "100%",
    paddingHorizontal: 22,
  },
  habbitTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 14,
  },
  habbitInput: {
    height: 50,
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 14.5,
    borderRadius: 22,
  },
  dateSection: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14.5,
    borderRadius: 22,
  },
  buttons:{
    flexDirection: "row",
    alignSelf:"flex-end",
    paddingHorizontal: 20,
    paddingTop:10,
  },
  cancelButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    height: 51,
    width: 121,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: 'center'
  },
  confirmButton: {
    backgroundColor: '#FF4F6C',
    height: 51,
    width: 121,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
});
