
// !Packages
import axios from 'axios'
import { createContext, useState, useEffect } from "react"

// !Context
export const PokeContext = createContext()

export default function PokeProvider({ children }) {

    const [pokemonList, setPokemonList] = useState([])

    const contextValue = {
        pokemonList
    }

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
        <PokeContext.Provider value={contextValue}>
            {children}
        </PokeContext.Provider>
    )
}
