import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "../component/footer";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.introContainer}>
        <Text style={styles.introText}>Diri ang Profile</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          
        </Text>
      </View>
      <Footer navigation={navigation} />{" "}
      {/* Render Footer component with navigation prop */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDBBAD",
  },
  introContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  introText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginTop: 20,
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    color: "black",
    marginTop: 10,
    marginBottom: 20,
  },
});

export default ProfileScreen;
