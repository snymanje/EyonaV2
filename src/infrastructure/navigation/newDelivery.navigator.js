import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { BasicInfo } from "../../features/newdelivery/screens/BasicInfo.screen";
/* import { Tank1 } from "../../features/newdeliveries/screens/Tank1.screen";
import { Tank2 } from "../../features/newdeliveries/screens/Tank2.screen";
import { Summary } from "../../features/newdeliveries/screens/Summary.screen";
import { CaptureImage } from "../../features/newdeliveries/screens/CaptureImage.screen"; */

const NewDeliveryStack = createStackNavigator();

export const NewDeliveriesNavigator = () => (
  <NewDeliveryStack.Navigator
    screenOptions={
      {
        /*  ...TransitionPresets.ModalSlideFromBottomIOS,
      headerShown: false, */
      }
    }
  >
    <NewDeliveryStack.Screen
      name="BasicInfoScreen"
      component={BasicInfo}
      options={{ title: "Basic Information" }}
    />
    {/*     <NewDeliveryStack.Screen name="Tank1Screen" component={Tank1} />
    <NewDeliveryStack.Screen name="Tank2Screen" component={Tank2} />
    <NewDeliveryStack.Screen name="SummaryScreen" component={Summary} />
    <NewDeliveryStack.Screen
      name="CaptureImageScreen"
      component={CaptureImage}
    /> */}
  </NewDeliveryStack.Navigator>
);
