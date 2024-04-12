import React from "react";
import { View, Text, FlatList } from "react-native";
import Footer from "../component/footer";


const CartTotal = ({ navigation }) => {
  // Dummy cart items for demonstration
  const cartItems = [
    { id: 1, name: "Bermuda Baggy Jean Qruel", price: 2999 },
    { id: 2, name: "Back To Me Tee", price: 799 },
  ];

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <View style={{ flex: 1, backgroundColor: "#CDBBAD" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, marginBottom: 10, color: "#6E5447" }}>
          Total Cart
        </Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginBottom: 5,
              }}
            >
              <Text style={{ color: "#6E5447" }}>{item.name}</Text>
              <Text style={{ color: "#6E5447" }}>₱{item.price}</Text>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#6E5447" }}>Total:</Text>
          <Text style={{ color: "#6E5447" }}>₱{totalPrice}</Text>
        </View>
      </View>
      {/* Footer component */}
      <Footer navigation={navigation} />{" "}
      {/* Pass navigation prop to Footer component */}
    </View>
  );
};

export default CartTotal;
