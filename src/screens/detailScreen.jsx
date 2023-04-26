import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import {
  BACKGROUND_BUTTON_PRIMARY,
  IMAGE_BORDER,
  SELECTED_SIZE_BOX_BACKGROUND_2C3BFE,
  TEXT_COLOR_WHITE,
} from "../components/Constants/Colors";
import { PROXIMA_NOVA_ALT_BOLD } from "../components/Constants/Fonts";
import MinusDisabled from "../components/assets/actionsheet/MinusDisabled.svg";
import MinusEnabled from "../components/assets/actionsheet/MinusEnabled.svg";
import PlusEnabled from "../components/assets/actionsheet/PlusEnabled.svg";
import PlusDisabled from "../components/assets/actionsheet/PlusDisabled.svg";

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

const DetailScreen = ({ route, navigation }) => {
  const [quantity, setQuantity] = useState(0);
  const [plusDisabled, setPlusDisabled] = useState(false);
  const [minusDisabled, setminusDisabled] = useState(false);

  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.thumb}
        source={{
          uri: item.url,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>Up to {item.off}% off</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <Pressable
          style={styles.backToVideo_BuyNow}
          onPress={() => alert("Buy Now")}
        >
          <Text style={styles.backToVideo_BuyNow_Text}>Buy Now</Text>
        </Pressable>
        <Pressable
          style={styles.go_add_toCart}
          onPress={() => alert("Add to Cart")}
        >
          <Text style={styles.go_add_toCart_Text}>Add to Cart</Text>
        </Pressable>
      </View>
      <View style={styles.quanpanel}>
        <Text
          style={styles.quantity}
        >
          Select Quantity
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: width * 0.04,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Pressable
            disabled={!(quantity > 0)}
            onPress={() =>
              quantity > 0 ? setQuantity(quantity - 1) : quantity
            }
          >
            <View
              style={{
                paddingVertical: height * 0.02,
                paddingHorizontal: width * 0.02,
              }}
            >
              <Text>Minus</Text>
            </View>
          </Pressable>
          <View style={{ ...styles.sizebox, borderWidth: 0 }}>
            <Text style={styles.quantxt}>{`${quantity}`}</Text>
          </View>
          <Pressable
            disabled={plusDisabled || minusDisabled}
            onPress={() => setQuantity(quantity + 1)}
          >
            <View
              style={{
                paddingVertical: height * 0.02,
                paddingHorizontal: width * 0.02,
              }}
            >
              <Text>Plus</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  thumb: {
    height: 250,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    width: "100%",
    marginTop: 10,
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10
  },
  price: {
    fontSize: 16,
    // fontWeight: '600',
    // marginBottom: 8,
    color: "green",
  },
  buttoncontainer: {
    // position: 'relative',
    // borderTopWidth: 0.25,
    // paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // position: 'absolute',
    // zIndex: 1000,
    // bottom: 0,
    // marginBottom: Dimensions.get('screen').height * 0.2,
  },
  backToVideo_BuyNow: {
    width: width * 0.45,
    height: width * 0.15,
    borderRadius: 8,
    backgroundColor: TEXT_COLOR_WHITE,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: BACKGROUND_BUTTON_PRIMARY,
  },
  backToVideo_BuyNow_Text: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily: PROXIMA_NOVA_ALT_BOLD,
    color: BACKGROUND_BUTTON_PRIMARY,
  },
  go_add_toCart: {
    width: width * 0.45,
    height: width * 0.15,
    borderRadius: 8,
    backgroundColor: BACKGROUND_BUTTON_PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  go_add_toCart_Text: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily: PROXIMA_NOVA_ALT_BOLD,
    color: TEXT_COLOR_WHITE,
  },
  sizebox: {
    justifyContent: "center",
    alignItems: "center",
    height: width * 0.15,
    minWidth: width * 0.2,
    borderWidth: 0.3,
    borderRadius: 5,
    padding: 1,

    fontFamily: PROXIMA_NOVA_ALT_BOLD,
    paddingHorizontal: width * 0.02,
  },
  quantxt: {
    fontSize: 18,
    alignSelf: "center",
    fontFamily: PROXIMA_NOVA_ALT_BOLD,
    fontWeight: "700",
  },
  quanpanel: {
    padding: 15,
    //backgroundColor:'lightblue'
  },
});

export default DetailScreen;
