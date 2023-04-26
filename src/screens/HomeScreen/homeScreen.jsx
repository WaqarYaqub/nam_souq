import * as React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingScreen from "./listingScreen";

const Tab = createBottomTabNavigator();

function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems:
     "center", justifyContent: "center" }}>
      <Text>Cart Screen</Text>
    </View>
  );
}
function FilterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Filter Screen</Text>
    </View>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "ios-cart-sharp" : "ios-cart-outline";
          } else if (route.name === "Filter") {
            iconName = focused ? "ios-filter-sharp" : "ios-filter-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={ListingScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{ headerShown: false }}
        component={CartScreen}
      />
      <Tab.Screen
        name="Filter"
        options={{ headerShown: false }}
        component={FilterScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
