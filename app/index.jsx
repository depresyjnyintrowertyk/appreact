import { Colors } from "../constants/Colors";
import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "expo-router";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image
        source={Logo}
        style={[styles.pic, { maxWidth: 500, maxHeight: 500 }]}
      />
      <Text style={[styles.title, { Color: theme.title }]}>Oh okay</Text>

      <Text style={{ marginTop: 20 }}>Hello!!!</Text>
      <Link href="/settings" style={styles.link}>
        click me
      </Link>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 72,
  },

  pic: {
    marginBottom: 40,
  },
  link: {
    fontSize: 40,
  },
});
