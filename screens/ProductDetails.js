import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  // Function to handle navigation to the cart page
  const handleProductTypePress = (selectedImage, product) => {
    navigation.navigate("CartPage", { selectedImage, product }); // Pass selected product and image as parameters
  };

  // Render different options based on product type
  const renderProductOptions = () => {
    switch (product.name) {
      case "TSHIRT":
        return (
          <View>
            <TouchableOpacity
              onPress={() =>
                handleProductTypePress(require("../assets/thaiboy.jpg"), {
                  name: "Thaibai Digital",
                  details: "₱ 799",
                })
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/thaiboy.jpg")}
                  style={{ width: 90, height: 150, resizeMode: "contain" }}
                />
                <Text>Thaibai Digital</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleProductTypePress(require("../assets/b2me.jpg"), {
                  name: "Back To Me Tee",
                  details: "₱ 799",
                })
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/b2me.jpg")}
                  style={{ width: 90, height: 150, resizeMode: "contain" }}
                />
                <Text>Back To Me Tee</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      case "ACCESSORIES":
        return (
          <View>
            <TouchableOpacity
              onPress={() =>
                handleProductTypePress(require("../assets/chain.jpg"), {
                  name: "Chrome Hearts Wallet Chain",
                  details: "₱ 599",
                })
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/chain.jpg")}
                  style={{ width: 90, height: 150, resizeMode: "contain" }}
                />
                <Text>Chrome Hearts Wallet Chain</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleProductTypePress(require("../assets/Pendant.jpg"), {
                  name: "Chrome Hearts Cross Pendant Necklace",
                  details: "₱ 599",
                })
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/Pendant.jpg")}
                  style={{ width: 90, height: 150, resizeMode: "contain" }}
                />
                <Text>Chrome Hearts Cross Pendant Necklace</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      case "PANTS":
        return (
          <View>
            <TouchableOpacity
              onPress={() =>
                handleProductTypePress(require("../assets/sand.jpg"), {
                  name: "Distressed Sand-Wash Kevlar Jeans",
                  details: "₱ 2,999",
                })
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/sand.jpg")}
                  style={{ width: 90, height: 150, resizeMode: "contain" }}
                />
                <Text>Distressed Sand-Wash Kevlar Jeans</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleProductTypePress(require("../assets/Bermuda.jpg"), {
                  name: "Bermuda Baggy Jean Qruel",
                  details: "₱ 2,999",
                })
              }
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/Bermuda.jpg")}
                  style={{ width: 90, height: 150, resizeMode: "contain" }}
                />
                <Text>Bermuda Baggy Jean Qruel</Text>
              </View>
            </TouchableOpacity>
          </View>
        );

      // Add more cases for other product types if needed
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CDBBAD",
      }}
    >
      {/* Render product options */}
      {renderProductOptions()}
    </View>
  );
};

export default ProductDetails;
