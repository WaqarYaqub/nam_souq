import React from "react";
import { View,Text, Image } from "react-native";

import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";

import styles from "./style";
import HelpCenterIcon from "../assets/helpcenter.svg";
import ReferFriendIcon from "../assets/referfriend.svg";
import SavedItemsIcon from "../assets/saveditems.svg";
import LikedItemsIcon from "../assets/heartDrawer.svg";

const DrawerContent = (props) => {
  const { navigation } = props;
  const handleLogout = async () => {
    navigation.closeDrawer();
  };
  const handSavedproduct = async (navigation) => {
    navigation.navigate("LikedProducts");
  };

  return (
    <DrawerContentScrollView
      {...props}
      style={{ marginTop: -4, backgroundColor: "#370467" }}
      showsVerticalScrollIndicator={false}
    >
     <View style={styles.drawerHeader}>
     <Image
      style={{ width: 70, height: 70, borderRadius: 50 }}
      source={{
        uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHa4GJ-65TaRg/profile-displayphoto-shrink_400_400/0/1638970071568?e=1669248000&v=beta&t=x7hs701ZT2OEEhzzHl2tJupRxtKoTbalckL3g6snuwg',
      }}
      // source={require("../assets/e-com.png")}
    />
      <Text style={{color: "white", fontSize: 30, fontWeight: '600'}}>Waqar</Text>
     </View>
      <DrawerItem
        label={"Liked Products"}
        labelStyle={styles.drawerItems}
        // icon={() => <LikedItemsIcon />}
        onPress={handSavedproduct}
        pressColor={"white"}
      />
      <DrawerItem
        label={"Saved Items"}
        labelStyle={styles.drawerItems}
        // icon={() => <SavedItemsIcon />}
        onPress={() => navigation.navigate("Saved Items")}
        pressColor={"white"}
      />
      <DrawerItem
        label={"Help Center"}
        labelStyle={styles.drawerItems}
        // icon={() => <HelpCenterIcon />}
        onPress={() => navigation.navigate("HelpCenter")}
        pressColor={"white"}
      />
      <View style={styles.separator} />
      <DrawerItem
        label={"Refer A Friend & Earn"}
        labelStyle={styles.referFriendStyle}
        // icon={() => <ReferFriendIcon />}
        onPress={() => alert("Earn by referring coming soon.")}
        pressColor={"white"}
      />
      <View style={styles.separator} />
      <DrawerItem
        label={"About Us"}
        labelStyle={styles.drawerItems}
        onPress={() => navigation.navigate("AboutUs")}
        pressColor={"white"}
      />
      <DrawerItem
        label={"Privacy Policy"}
        labelStyle={styles.drawerItems}
        onPress={() => navigation.navigate("PrivacyPolicy")}
        pressColor={"white"}
      />
      <DrawerItem
        label={"Terms & Conditions"}
        labelStyle={styles.drawerItems}
        onPress={() => navigation.navigate("TermsAndConditions")}
        pressColor={"white"}
      />
      <DrawerItem
        label={"Refund & Return Policy"}
        labelStyle={styles.drawerItems}
        onPress={() => navigation.navigate("RefundAndReturnPolicy")}
        pressColor={"white"}
      />
      <DrawerItem
        label={"Log Out"}
        labelStyle={styles.drawerItems}
        onPress={handleLogout}
        pressColor={"white"}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
