
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
      alignItems: 'center'
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
      backgroundColor: '#569EE4'
    },
    GreyCircleDecoration: {
      position: "absolute",
      bottom: 65,
      right: 100,
      height: 12,
      width: 12,
      borderRadius: 40,
      backgroundColor: '#EBEBEB'
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
      opacity: 0.50,
    },
    button: {
      backgroundColor: '#FF4F6C',
      marginTop: 50,
      height: 59,
      width: 150,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: 'center'
    },
    buttonTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: 'white'
    }
  });
  