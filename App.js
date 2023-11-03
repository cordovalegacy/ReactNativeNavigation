
// !Packages
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
      <StatusBar style='dark' />
      <PokeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='All-Pokemon'>
              {(props) => (
                <AppWrapper>
                  <AllPokemon {...props} />
                </AppWrapper>
              )}
            </Stack.Screen>
            <Stack.Screen name="One-Pokemon">
              {(props) => (
                <AppWrapper>
                  <OnePokemon {...props} />
                </AppWrapper>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PokeProvider>
    </>
  )
}
