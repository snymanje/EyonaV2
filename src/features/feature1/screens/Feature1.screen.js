import React from "react";
import { Card, Paragraph } from "react-native-paper";

import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const CardContainer = styled.View`
  width: 100%;
`;

const Feature1Card = styled(Card)`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Feature1Screen = () => {
  return (
    <Screen>
      <CardContainer>
        <Feature1Card>
          <Card.Title title="Screen 1" subtitle="Feature 1" />
          <Card.Content>
            <Text>Card title</Text>
            <Paragraph>
              <Text variant="body"></Text>
            </Paragraph>
          </Card.Content>
        </Feature1Card>
      </CardContainer>
    </Screen>
  );
};
