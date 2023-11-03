
// !Packages
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// !Components
import AllPokemon from './components/AllPokemon'

// !Routing
const Stack = createNativeStackNavigator()

export default function App() {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        console.log(res.data.results)
        setPokemonList(res.data.results)
      })
      .catch((err) => console.log("err: ", err))
  }, [])

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={AllPokemon} options={{
            pokemonList: pokemonList
          }} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </>
  )
}
