import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  TextInput,
  Card,
  Button,
  Provider,
  DefaultTheme,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

import styled from "styled-components/native";

const Input = styled(TextInput)`
  margin-bottom: 10px;
`;

const DropDownSelector = styled.View`
  margin-bottom: 10px;
`;

export const BasicInfo = ({ navigation }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState("");

  const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
    {
      label: "Others2",
      value: "others2",
    },
    {
      label: "Others3",
      value: "others3",
    },
  ];

  return (
    <Provider theme={DefaultTheme}>
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
              <DropDownSelector>
                <DropDown
                  label={"Select Site Name"}
                  mode={"outlined"}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                  value={gender}
                  setValue={setGender}
                  list={genderList}
                  dropDownItemSelectedTextStyle={{
                    color: "#013D73",
                  }}
                />
              </DropDownSelector>
              <Input
                label="Pedometer"
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
                label="Account Number"
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
                label="Account Number"
                mode="outlined"
                selectionColor="#013D73"
                activeUnderlineColor="#013D73"
                activeOutlineColor="#013D73"
                keyboardType="numeric"
              />
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
    </Provider>
  );
};
