import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import Footer from "../component/footer";

const Page1 = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    navigation.navigate("Home");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductPress = (productType) => {
    let product;

    // Set product details based on productType
    switch (productType) {
      case "TSHIRT":
        product = {
          name: "TSHIRT",
          image: require("../assets/t-shirt.png"),
          details: "TSHIRT details go here",
        };
        break;
      case "ACCESSORIES":
        product = {
          name: "ACCESSORIES",
          image: require("../assets/accessories.png"),
          details: "ACCESSORIES details go here",
        };
        break;
      case "PANTS":
        product = {
          name: "PANTS",
          image: require("../assets/pants.png"),
          details: "PANTS details go here",
        };
        break;
      case "SHOES":
        product = {
          name: "SHOES",
          image: require("../assets/shoes.png"),
          details: "SHOES details go here",
        };
        break;
      case "HOODIES":
        product = {
          name: "HOODIES",
          image: require("../assets/hoodies.png"),
          details: "HOODIES details go here",
        };
        break;
      default:
        product = {
          name: "Sample Product",
          image: require("../assets/logo.png"),
          details: "Product details go here",
        };
    }

    // Navigate to the ProductDetails screen and pass the product as a parameter
    navigation.navigate("ProductDetails", { product });
  };

  const navigateToAboutUs = () => {
    navigation.navigate("About");
  };

  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  const navigateToCategory = () => {
    navigation.navigate("Category");
  };

  const navigateToContactUs = () => {
    navigation.navigate("Contact");
  };

  const navigateToSettings = () => {
    navigation.navigate("Setting");
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <MaterialIcons
            name={isMenuOpen ? "close" : "menu"}
            size={30}
            color="#444147"
          />{" "}
          {/* Updated color */}
        </TouchableOpacity>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={styles.content}>
          <TouchableOpacity onPress={() => handleProductPress("TSHIRT")}>
            <Image
              source={require("../assets/t-shirt.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress("ACCESSORIES")}>
            <Image
              source={require("../assets/accessories.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress("PANTS")}>
            <Image
              source={require("../assets/pants.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress("SHOES")}>
            <Image
              source={require("../assets/shoes.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress("HOODIES")}>
            <Image
              source={require("../assets/hoodies.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Logout" onPress={handleLogout} color="#444147" />{" "}
          {/* Updated color */}
        </View>

        {isMenuOpen && (
          <View style={styles.menuContainer}>
            <Button title="Profile" onPress={navigateToProfile} color="black" />
            <Button
              title="Category"
              onPress={navigateToCategory}
              color="black"
            />
            <Button
              title="About Us"
              onPress={navigateToAboutUs}
              color="black"
            />
            <Button
              title="Contact Us"
              onPress={navigateToContactUs}
              color="black"
            />
            <Button
              title="Settings"
              onPress={navigateToSettings}
              color="black"
            />
          </View>
        )}
      </View>

      {/* Footer component */}
      <Footer navigation={navigation} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDBBAD",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "40%",
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 999,
  },
  logo: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    margin: 10,
  },
  menuContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Page1;
