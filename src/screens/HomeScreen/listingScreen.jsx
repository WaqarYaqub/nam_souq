import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableHighlight,
  Platform,
  LogBox,
  ScrollView,
} from "react-native";
import { Banners, Card } from "../../components";

const data = [
  {
    title: "Mobile",
    url: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    off: "50",
  },
  {
    title: "Shoes",
    url: "https://media.gettyimages.com/photos/canvas-shoes-picture-id171224469?s=612x612",
    off: "20",
  },
  {
    title: "Charger",
    url: "https://cdn.pixabay.com/photo/2018/07/01/13/28/two-pin-3509490__480.jpg",
    off: "20",
  },
  {
    title: "Laptop",
    url: "https://www.thebalancesmb.com/thmb/CB4KWYMHp4wFIvJM4ZKLffI5o-g=/1352x1352/smart/filters:no_upscale()/hands-woman-laptop-hands-in-frame-business-woman-using-laptop-people-using-laptop-hands-on-laptop_t20_mvVV6l-5c912a4446e0fb0001f8d10f.jpg",
    off: "70",
  },
  {
    title: "Head Phone",
    url: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&w=1000&q=80",
    off: "25",
  },
  {
    title: "USB",
    url: "https://cdn.vox-cdn.com/thumbor/2Orj2vC3zbZnPUoccmrtugBfMwE=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23949203/226141_rubberDucky.jpg",
    off: "20",
  },
  {
    title: "Watch",
    url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    off: "10",
  },
  {
    title: "Camera",
    url: "https://static3.depositphotos.com/1007298/228/i/600/depositphotos_2284302-stock-photo-digital-slr-camera.jpg",
    off: "25",
  },
  {
    title: "T Shirt",
    url: "https://st2.depositphotos.com/2251265/5479/i/950/depositphotos_54795495-stock-photo-white-t-shirt.jpg",
    off: "70",
  },
];

const ListingScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Banners />
      </View>
      {/* <View
        style={{
          flex: 1,
          justifyContent: "center",
          display: 'flex',
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 10,
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => {
          return (
            <Card
              onPress={() => navigation.navigate("Detail")}
              item={item}
              key={index}
            />
          );
        })}
      </View> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              // justifyContent: "center",
              // display: 'flex',
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 10,
              flexWrap: "wrap",
              marginBottom: Platform.OS === "ios" ? 0 : 20,
            }}
          >
            <Card
              onPress={() =>
                navigation.navigate("Detail", {
                  item,
                })
              }
              item={item}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
      />
    </ScrollView>
  );
};

export default ListingScreen;
