import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CartScreen from "./screens/CartScreen";
import AccountScreen from "./screens/AccountScreen";
import BookDetailScreen from "./screens/BookDetailScreen";

import CustomTabBar from "./components/CustomTabBar";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Category"
        component={CategoryScreen}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
      />

    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="BookDetail"
          component={BookDetailScreen}
          options={{
            title: "Chi tiết sách",
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}