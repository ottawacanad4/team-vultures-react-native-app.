import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./component/Header";
import LoginPage from "./screens/LoginPage";
import Page1 from "./screens/page1";
import Registration from "./screens/Registration";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ProductDetails from "./screens/ProductDetails";
import CartPage from "./screens/CartPage"; // Import CartPage component
import ProfileScreen from "./screens/ProfileScreen"; // Import ProfileScreen component
import CartTotal from "./screens/CartTotal"; // Import CartTotal component

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: "#27232B" },
      headerTintColor: "#CDBBAD",
      headerTitleStyle: { fontWeight: "bold" },
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Team Vultures" }}
    />
    <Stack.Screen
      name="Login"
      component={LoginPage}
      options={{ title: "Login" }}
    />
    <Stack.Screen
      name="Page1"
      component={Page1}
      options={{ title: "Main Page" }}
    />
    <Stack.Screen
      name="Registration"
      component={Registration}
      options={{ title: "Registration" }}
    />
    <Stack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
      options={{ title: "Forgot Password" }}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{ title: "Product Details" }}
    />
    <Stack.Screen
      name="CartPage"
      component={CartPage} // Add CartPage screen
      options={{ title: "Cart Page" }}
    />
    <Stack.Screen
      name="TotalCart" // Rename the screen to TotalCart
      component={CartTotal} // Use the CartTotal component for TotalCart
      options={{ title: "Total Cart" }} // Update the title
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen} // Add ProfileScreen as a screen
      options={{ title: "Profile" }} // Set the title of the screen if needed
    />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
  
    <Drawer.Screen name="Home" component={StackNavigator} />
    <Drawer.Screen name="LogOut" component={StackNavigator} />
    {/* Add additional drawer screens here if needed */}
  </Drawer.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const HomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text
          style={{
            color: "#444147",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Login to Your Account!
        </Text>
        <Button title="Login" onPress={handleLoginPress} color="#444147" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDBBAD",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
