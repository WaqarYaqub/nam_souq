import "react-native-gesture-handler";
import * as React from "react";
import {
  Button,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons, AntDesign, EvilIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { HomeScreen, DetailScreen, SearchScreen, PrivacyPolicy } from "./src/screens";
import DrawerContent from "./src/components/Drawer/index";
import {PROXIMA_NOVA_ALT_BOLD} from './src/components/Constants/Fonts';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      // source={{
      //   uri: 'https://reactnative.dev/img/tiny_logo.png',
      // }}
      source={require("./assets/e-com.png")}
    />
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
          headerTitleAlign: "center",
          headerRight: () => (
            <Ionicons
              name="search-sharp"
              size={24}
              color="black"
              onPress={() => navigation.navigate("Search Screen")}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="md-menu-sharp" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "Detail Screen",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MyDrawer"
        component={MyDrawer}
      />
      <Stack.Screen name="Search Screen" component={SearchScreen} />
      <Stack.Screen
        name="PrivacyPolicy"
        options={() => ({
          title: 'Privacy policy',
          headerTitleStyle: {
            fontSize: 18,
            fontFamily: PROXIMA_NOVA_ALT_BOLD,
          },
        })}
        component={PrivacyPolicy}
      />
    </Stack.Navigator>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: false,
      }}
      // drawerStyle={{ width: 270 }}
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="MainStack"
    >
      <Drawer.Screen
        // options={({ navigation }) => ({
        //   headerTitle: (props) => <LogoTitle {...props} />,
        //   headerTitleAlign: "center",
        //   headerRight: () => (
        //     <Ionicons
        //       name="search-sharp"
        //       size={24}
        //       color="black"
        //       onPress={() => navigation.navigate("Search Screen")}
        //     />
        //   ),
        //   // headerLeft: () => (
        //   //   <TouchableOpacity onPress={() => navigation.navigate("MyDrawer")}>
        //   //     <Ionicons name="md-menu-sharp" size={24} color="black" />
        //   //   </TouchableOpacity>
        //   // ),
        // })}
        options={{
          drawerItemStyle: { height: 0 },
          headerShown: false,
        }}
        name="MainStack"
        component={MainStack}
      />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
