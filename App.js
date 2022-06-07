import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './Screens/AllPlaces';
import AddPlaces from './Screens/AddPlaces';
import IconButton from './component/UI/IconButton';
import { Colors } from './constants/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700}
          }}
        >
          <Stack.Screen 
            name='AllPlaces' 
            component={AllPlaces}
            options={({navigation})=>({
              title: 'Your Favourite Places',
              headerRight: ({tintColor})=>(
                <IconButton
                  icon='add'
                  size={24}
                  color={tintColor}
                  onPress={()=> navigation.navigate('AddPlaces')}
                  />
              ),
            })}
            />
          <Stack.Screen 
            name='AddPlaces' 
            component={AddPlaces}
            options = {{
              title: 'Add a new Place'
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
