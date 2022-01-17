import React from "react";
import { Card, Paragraph, Searchbar } from "react-native-paper";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

import { Text } from "../../../components/typography/Text.component";
import { Spacer } from "../../../components/spacer/Spacer.component";
import { MyDeliveriesCard } from "../components/MyDeliveriesCard.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const ScrollViewMargin = styled(ScrollView)`
  /*   margin-left: 10px;
  margin-right: 10px; */
`;

const CardContainer = styled.View`
  width: 100%;
`;

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[1]}
    ${(props) => props.theme.space[2]} ${(props) => props.theme.space[1]};
`;

export const MyDeliveriesScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
      <ScrollViewMargin>
        <CardContainer>
          <Spacer position="top" size="large">
            <TouchableOpacity
              onPress={() => navigation.navigate("DeliveryDetail")}
            >
              <MyDeliveriesCard />
            </TouchableOpacity>
          </Spacer>
        </CardContainer>
      </ScrollViewMargin>
    </SafeArea>
  );
};
