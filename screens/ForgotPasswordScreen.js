import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";
import { FontAwesome5 } from "@expo/vector-icons";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [secureNewPassword, setSecureNewPassword] = useState(true);
  const [secureConfirmNewPassword, setSecureConfirmNewPassword] =
    useState(true);

  const handleResetPassword = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.label}></Text>
        {/* Password input for username */}
        <View style={styles.passwordInput}>
        <TextInput style={styles.input} placeholder="Enter your username" />
        <TouchableOpacity
          onPress={() => setSecureNewPassword(!secureNewPassword)}
          style={styles.eyeIcon}
        >
          <FontAwesome5
            name={secureNewPassword ? "" : ""}
            size={20}
            color="#6E5447"
          />
        </TouchableOpacity>
        </View>
        <Text style={styles.label}></Text>
        {/* Password input for new password */}
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={secureNewPassword}
            placeholder="Enter new password"
          />
          {/* Password eye icon for new password */}
          <TouchableOpacity
            onPress={() => setSecureNewPassword(!secureNewPassword)}
            style={styles.eyeIcon}
          >
            <FontAwesome5
              name={secureNewPassword ? "eye-slash" : "eye"}
              size={20}
              color="#6E5447"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}></Text>
        {/* Password input for confirming new password */}
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.input}
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            secureTextEntry={secureConfirmNewPassword}
            placeholder="Confirm new password"
          />
          {/* Password eye icon for confirming new password */}
          <TouchableOpacity
            onPress={() =>
              setSecureConfirmNewPassword(!secureConfirmNewPassword)
            }
            style={styles.eyeIcon}
          >
            <FontAwesome5
              name={secureConfirmNewPassword ? "eye-slash" : "eye"}
              size={20}
              color="#6E5447"
            />
          </TouchableOpacity>
        </View>
        {/* Reset button */}
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={handleResetPassword} color="#1A2F36" />
        </View>
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#6E5447",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "45%",
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
});

export default ForgotPasswordScreen;
