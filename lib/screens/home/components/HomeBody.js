import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "../styles";

const HomeBody = () => {
    
  const itemPic1 = "../../../../assets/images/itemPic1.png";
  const itemPic2 = "../../../../assets/images/itemPic2.png";
  
  return (
    <>
     <View style={styles.todayHabitsContainer}>
          <Text style={[styles.title, { fontSize: 19 }]}>Today Habits.</Text>
          <Text style={styles.subtitle}>
            It motivates you by showing all the things Todo..
          </Text>
        </View>
        <View style={[styles.itemContainer, { backgroundColor: "#549CE1" }]}>
          <View style={styles.itemImageContainer}>
            <Image style={styles.itemImage} source={require(itemPic1)} />
          </View>
          <View style={styles.itemTextsContainer}>
            <Text style={[styles.itemTextsContainerTitle, { color: "#fff" }]}>
              Archery Tournament
            </Text>
            <Text
              style={[styles.itemTextsContainerSubtitle, { color: "#fff" }]}
            >
              Feb 25 . 8:00 AM
            </Text>
          </View>
          <View style={styles.itemCheckContainer}></View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemImageContainer}>
            <Image style={styles.itemImage} source={require(itemPic2)} />
          </View>
          <View style={styles.itemTextsContainer}>
            <Text style={styles.itemTextsContainerTitle}>
              Archery Tournament
            </Text>
            <Text style={styles.itemTextsContainerSubtitle}>
              Feb 25 . 8:00 AM
            </Text>
          </View>
          <View style={styles.itemCheckContainer}></View>
        </View>
    </>
  )
}

export default HomeBody