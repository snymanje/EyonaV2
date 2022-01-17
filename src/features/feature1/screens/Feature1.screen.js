import React from "react";
import { Card, Paragraph, Searchbar } from "react-native-paper";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { SafeAreaView, ScrollView } from "react-native";

import { Text } from "../../../components/typography/Text.component";
import { Spacer } from "../../../components/spacer/Spacer.component";
import { MyDeliveriesCard } from "../components/MyDeliveriesCard.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

const ScrollViewMargin = styled(ScrollView)`
  margin-left: 10px;
  margin-right: 10px;
`;

const CardContainer = styled.View`
  width: 100%;
`;

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Feature1Screen = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
      <ScrollViewMargin>
        <CardContainer>
          <Spacer position="top" size="large">
            <MyDeliveriesCard />
          </Spacer>
        </CardContainer>
      </ScrollViewMargin>
    </SafeArea>
  );
};
