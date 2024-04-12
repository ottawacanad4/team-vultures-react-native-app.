import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Category Screen</Text>
      {/* Add your category-related content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDBBAD",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryScreen;
