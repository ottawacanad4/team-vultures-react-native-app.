import React from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import logo from "../assets/logo.png";

const Header = (props) => {
  const navigation = useNavigation(); // Initialize navigation

  const handleLoginPress = () => {
    navigation.navigate("Login"); // Navigate to the 'Login' screen
  };

  return (
    <View style={styles.Header}>
           {" "}
      <Image
        source={logo}
        style={{ width: 200, height: 200, marginRight: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
  },
});

export default Header;
