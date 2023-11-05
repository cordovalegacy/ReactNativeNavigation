
// !Packages
import { Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// !Components
import Favorites from './screens/Favorites'
import AllPokemon from './screens/AllPokemon'
import OnePokemon from './screens/OnePokemon'
import AppWrapper from './constants/AppWrapper'
import PokeProvider from './context/PokeContext'

// !Routing
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{
    drawerContentStyle: { backgroundColor: "#01579b" },
    drawerInactiveTintColor: "white",
    drawerActiveTintColor: "red"
  }}>
    <Drawer.Screen name='All-Pokemon' options={{ title: "All Pokemon", headerTintColor: "white", headerStyle: { backgroundColor: "red" } }}>
      {(props) => (
        <AppWrapper>
          <AllPokemon {...props} />
        </AppWrapper>
      )}
    </Drawer.Screen>
    <Drawer.Screen name='Favorites' component={Favorites} />
  </Drawer.Navigator>
)

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
            <Stack.Screen name='Home' component={DrawerNavigator} />
            <Stack.Screen name="One-Pokemon" options={({ route, navigation }) => {
              const selectedPokemon = route.params.selectedPokemon
              return {
                title: selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1),
                headerRight: () => {
                  return <Image source={require("./assets/star.png")} />
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
