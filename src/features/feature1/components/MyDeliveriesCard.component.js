import React from "react";
import { showLocation } from "react-native-map-link";
import { Card, Paragraph } from "react-native-paper";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/Text.component";

const Feature1Card = styled(Card)``;

const Map = styled(MapView)`
  height: 140px;
  width: 100%;
`;

export const MyDeliveriesCard = ({ mydelivery = {} }) => {
  const {
    site = "Caltex Duncan Village",
    accNumber = 22000,
    lat = -33.9793,
    long = 25.5534,
    deliveryDate = "12/11/2021 5:40 PM",
    status = "Pending",
    totalD50 = 5000,
    totalULP = 15200,
  } = mydelivery;

  return (
    <Feature1Card>
      <Card.Title title="Screen 1" />
      <Map
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        <MapView.Marker
          title="The title here"
          coordinate={{
            latitude: lat,
            longitude: long,
          }}
        >
          <MapView.Callout
            onPress={() => {
              showLocation({
                latitude: lat,
                longitude: long,
                sourceLatitude: -32.93431019, // optionally specify starting location for directions
                sourceLongitude: 27.99260484, // not optional if sourceLatitude is specified
                //title: "The White House", // optional
                googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title
                //googlePlaceId: "ChIJGVtI4by3t4kRr51d_Qm_x58", // optionally specify the google-place-id
                alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
                dialogTitle: "This is the dialog Title", // optional (default: 'Open in Maps')
                dialogMessage: "This is the amazing dialog Message", // optional (default: 'What app would you like to use?')
                cancelText: "This is the cancel button text", // optional (default: 'Cancel')
                appsWhiteList: ["google-maps"], // optionally you can set which apps to show (default: will show all supported apps installed on device)
                //naverCallerName: "com.example.myapp", // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
                // appTitles: { 'google-maps': 'My custom Google Maps title' }, // optionally you can override default app titles
                // app: 'uber',  // optionally specify specific app to use
                directionsMode: "car", // optional, accepted values are 'car', 'walk', 'public-transport' or 'bike'
              });
            }}
          ></MapView.Callout>
        </MapView.Marker>
      </Map>

      <Card.Content>
        <Text>Card title</Text>
        <Paragraph>
          <Text variant="body"></Text>
        </Paragraph>
      </Card.Content>
    </Feature1Card>
  );
};
