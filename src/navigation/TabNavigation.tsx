import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "./StackNavigation";
import { Text, View } from "react-native";
import TaskActive from "../assets/TaskActive";
import TaskDefault from "../assets/TaskDefault";
import MapActive from "../assets/MapActive";
import MapDefault from "../assets/MapDefault";


const Tab = createBottomTabNavigator();
const tab2= ()=>{return <View><Text>hi this is dummy tab</Text></View>};
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
          return iconName;
        },
    })}
    >
        <Tab.Screen name="Tasks" component={StackNavigation} />
        <Tab.Screen name="map" component={tab2} />
    </Tab.Navigator>
   )
};

export default TabNavigation;
