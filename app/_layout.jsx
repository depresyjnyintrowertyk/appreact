/* jakbym chciała jakiś stały element na dole strony
import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <Text>Footer</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
*/
//O a tu navbar jakby, można strzałkę w bok, dodać tu jakieś settings i mode switch?
import { Colors } from "../constants/Colors";
import { Stack } from "expo-router";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={{ flex: 1 }}>
      <>
        <StatusBar value="auto" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="index" options={{ title: "go to settings" }} />
          <Stack.Screen name="settings" options={{ title: "Settings" }} />
        </Stack>
      </>
      <Text>GoBack</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
