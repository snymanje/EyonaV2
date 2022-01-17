import React from "react";
import { Card, Paragraph, Searchbar } from "react-native-paper";
import { FadeInView } from "../../../components/animation/fade.animation";
import styled from "styled-components/native";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Text } from "../../../components/typography/Text.component";
import { Spacer } from "../../../components/spacer/Spacer.component";
import { MyDeliveriesCard } from "../components/MyDeliveriesCard.component";

import { deliveryData } from "../../../services/deliveries/mock.data";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
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
      <CardContainer>
        <Spacer position="top" size="large">
          <FlatList
            data={deliveryData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DeliveryDetail", {
                    delivery: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <MyDeliveriesCard delivery={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.site}
          />
        </Spacer>
      </CardContainer>
    </SafeArea>
  );
};
