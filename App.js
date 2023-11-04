
// !Packages
import { Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// !Components
import AllPokemon from './screens/AllPokemon'
import OnePokemon from './screens/OnePokemon'
import AppWrapper from './constants/AppWrapper'
import PokeProvider from './context/PokeContext'

// !Routing
const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <PokeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#01579b" },
            headerTintColor: "white"
          }}>
            <Stack.Screen name='All-Pokemon' options={{ title: "All Pokemon" }} >
              {(props) => (
                <AppWrapper>
                  <AllPokemon {...props} />
                </AppWrapper>
              )}
            </Stack.Screen>
            <Stack.Screen name="One-Pokemon" options={({ route, navigation }) => {
              const selectedPokemon = route.params.selectedPokemon
              return {
                title: selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1),
                headerRight: () => {
                  return <Image source={require("./assets/star.png")}/>
                } 
              }
            }} >
              {(props) => (
                <AppWrapper>
                  <OnePokemon {...props} />
                </AppWrapper>
              )}
            </Stack.Screen>
          </Stack.Navigator >
        </NavigationContainer >
      </PokeProvider >
    </>
  )
}
