import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput, Card, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

import styled from "styled-components/native";

const Input = styled(TextInput)`
  margin-bottom: 40px;
`;

export const BasicInfo = ({ navigation }) => {
  const [country, setCountry] = useState("Unknown");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <Card
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <Input
              label="Order Number"
              mode="outlined"
              selectionColor="#013D73"
              activeUnderlineColor="#013D73"
              activeOutlineColor="#013D73"
              keyboardType="numeric"
            />
            <Input
              label="Account Number"
              mode="outlined"
              selectionColor="#013D73"
              activeUnderlineColor="#013D73"
              activeOutlineColor="#013D73"
              keyboardType="numeric"
            />
            <Input
              label="Pedometer"
              mode="outlined"
              selectionColor="#013D73"
              activeUnderlineColor="#013D73"
              activeOutlineColor="#013D73"
              keyboardType="numeric"
            />
            <Picker
              selectedValue={country}
              onValueChange={(value) => setCountry(value)}
              mode="dropdown" // Android only
            >
              <Picker.Item
                label="Please select your retail site"
                value="Unknown"
              />
              <Picker.Item label="Australia" value="Australia" />
              <Picker.Item label="Belgium" value="Belgium" />
              <Picker.Item label="Canada" value="Canada" />
              <Picker.Item label="India" value="India" />
              <Picker.Item label="Japan" value="Japan" />
            </Picker>
          </View>
          <View>
            <Button
              icon="send"
              mode="contained"
              onPress={() => {}}
              contentStyle={{ height: 60, backgroundColor: "#013D73" }}
            >
              Continue
            </Button>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};
