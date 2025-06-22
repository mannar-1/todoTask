import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "./StackNavigation";
import { Text, View } from "react-native";
import TaskActive from "../assets/TaskActive";
import TaskDefault from "../assets/TaskDefault";
import MapActive from "../assets/MapActive";
import MapDefault from "../assets/MapDefault";
import MapScreen from "../screens/MapScreen";
import GeneratorDefault from "../assets/GeneratorDefault";
import Generator from "../screens/Generator";


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
   return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Tasks") {
            iconName = focused ? <TaskActive /> : <TaskDefault />;
          } else if (route.name === "map") {
            iconName = focused ? <MapActive /> : <MapDefault />;
          }
          else{
            iconName= focused ? <GeneratorDefault/> : <GeneratorDefault />;
          }
          return iconName;
        },
    })}
    >
        <Tab.Screen name="Tasks" component={StackNavigation} />
        <Tab.Screen name="map" component={MapScreen} />
        <Tab.Screen name="Generator" component={Generator} />
    </Tab.Navigator>
   )
};

export default TabNavigation;
