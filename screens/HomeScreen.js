import React from "react";
import { View, Text, StyleSheet, Button } from "react native";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Text style={styles.text}>
        This is the Home screen of the app.
      </Text>

      <Button
        title=" go to MenuScreen"
        onPress={() => props.navigation.navigate("Menu")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;