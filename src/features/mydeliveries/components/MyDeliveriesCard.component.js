import React from "react";
import { showLocation } from "react-native-map-link";
import { Card, Paragraph } from "react-native-paper";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/Text.component";
import { View } from "react-native";

const Feature1Card = styled(Card)`
  padding: 0px 5px 0px 5px;
`;

const Feature1CardTitle = styled.View`
  padding: 10px;
`;

const Map = styled(MapView)`
  height: 140px;
  width: 100%;
`;

export const MyDeliveriesCard = ({ delivery }) => {
  const {
    site = "Caltex Duncan Village",
    OrderNo = 22000,
    lat = -33.9793,
    long = 25.5534,
    totalD50 = 5000,
    totalULP = 15200,
  } = delivery;

  return (
    <Feature1Card>
      <Feature1CardTitle>
        <Text variant="heading">{site}</Text>
      </Feature1CardTitle>

      <Map
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
        pitchEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        <MapView.Marker
          title="The title here"
          coordinate={{
            latitude: lat,
            longitude: long,
          }}
          /*     image={{ uri: "../../../../assets/gas_station.png" }} */
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

      <Card.Content style={{ paddingTop: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text variant="caption">OrderNo</Text>
            <Text>{OrderNo}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginHorizontal: 5 }}>
              <Text variant="caption">Total D50</Text>
              <Text>{totalD50}</Text>
            </View>
            <View
              style={{
                height: "80%",
                width: 1,
                alignSelf: "center",
                marginHorizontal: 5,
                backgroundColor: "#f5f5f5",
              }}
            ></View>
            <View style={{ marginHorizontal: 5 }}>
              <Text variant="caption">Total ULP</Text>
              <Text>{totalULP}</Text>
            </View>
          </View>
        </View>
      </Card.Content>
    </Feature1Card>
  );
};
