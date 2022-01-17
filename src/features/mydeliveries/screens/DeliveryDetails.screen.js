import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const DeliveryDetailsScreen = ({ route }) => {
  const { delivery } = route.params;
  return (
    <View style={styles.screen}>
      <Text>{delivery.site}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
