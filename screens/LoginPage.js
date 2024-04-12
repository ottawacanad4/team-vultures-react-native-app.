import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";
import { FontAwesome5 } from "@expo/vector-icons";

const LoginPage = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate("Page1");
  };

  const handleSignUp = () => {
    navigation.navigate("Registration");
  };

  const handleResetPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="Username" />

        {/* Password input */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <FontAwesome5
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color="#6E5447"
            />
          </TouchableOpacity>
        </View>

        {/* Login button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#444147", width: "45%" }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign up button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#444147", width: "45%" }]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Forgot password text */}
        <TouchableOpacity onPress={handleResetPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#CDBBAD", // Changed background color
    paddingTop: 30,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#6E5447", // Changed border color
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderColor: "#6E5447", // Changed border color
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  eyeIcon: {
    
    position: "absolute",
    right: 10,
  },
  button: {
    backgroundColor: "#444147",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "45%",
  },
  buttonText: {
    color: "#CDBBAD", // Changed text color
    textAlign: "center",
  },
  forgotPasswordText: {
    textAlign: "center",
    color: "#444147", // Changed text color
  },
});

export default LoginPage;
