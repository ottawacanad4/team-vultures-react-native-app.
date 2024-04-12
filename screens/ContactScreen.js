import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/number.png")} style={styles.logo} />
        <Image source={require("../assets/email.png")} style={styles.logo} />
        <Image source={require("../assets/page.png")} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDBBAD",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default ContactScreen;
