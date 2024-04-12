import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>CEO</Text>
          <Image
            source={require("../assets/rahmat.jpg")}
            style={styles.roundImage}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Designer</Text>
          <Image
            source={require("../assets/bernadith.jpg")}
            style={styles.roundImage}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Employee</Text>
          <Image
            source={require("../assets/josephus.jpg")}
            style={styles.roundImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CDBBAD",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CDBBAD",
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  roundImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
  },
});

export default AboutScreen;
