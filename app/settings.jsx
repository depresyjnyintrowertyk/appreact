import { Colors } from "../constants/Colors";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";

const settings = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View>
      <Text>Remind every 1 hour</Text>
      <Text>Glass size 100 ml</Text>
    </View>
  );
};

export default settings;
const styles = StyleSheet.create({});
