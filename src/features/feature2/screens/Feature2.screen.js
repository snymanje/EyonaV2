import React from "react";

import styled from "styled-components/native";

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

import { Text } from "../../../components/typography/text.component";

export const Feature2Screen = () => {
  return (
    <Screen>
      <Text variant="body">Feature 2</Text>
    </Screen>
  );
};
