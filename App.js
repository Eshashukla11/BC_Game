import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./App/Screens/ForgotPassword";
import Colors from "./App/Utils/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{headerShown:false}} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingTop:'12%',
  },
});
