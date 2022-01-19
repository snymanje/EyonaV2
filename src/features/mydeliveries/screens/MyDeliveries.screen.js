import React from "react";
import { Searchbar } from "react-native-paper";
import { FadeInView } from "../../../components/animation/fade.animation";
import styled from "styled-components/native";
import { SafeAreaView, TouchableOpacity, FlatList } from "react-native";

import { Spacer } from "../../../components/spacer/Spacer.component";
import { MyDeliveriesCard } from "../components/MyDeliveriesCard.component";

import { deliveryData } from "../../../services/deliveries/mock.data";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const CardContainer = styled.View`
  width: 100%;
  margin-bottom: 70px;
`;

const SearchBarContainer = styled.View`
  padding: 10px;
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
                    <MyDeliveriesCard delivery={item} navigation={navigation} />
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
