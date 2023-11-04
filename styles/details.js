

import { StyleSheet } from 'react-native'


export const details = StyleSheet.create({
    screen: {
        flex: 1
    },
    highlight: {
        color: "goldenrod",
        fontWeight: "900",
        fontSize: 30
    },
    detailsContainer: {
        marginTop: -20
    },
    titleBackground: {
        backgroundColor: "#01579b",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 10,
        shadowColor: "black",
        marginTop: 10,
        borderWidth: 3,
        borderColor: "white"
    },
    title: {
        color: "white",
        fontSize: 25,
        fontWeight: "700",
        textAlign: "center"
    },
    pokemonImage: {
        width: 300, 
        height: 300
    },
    detailsView: {
        backgroundColor: "#01579b",
        padding: 20,
        marginVertical: 10,
        borderRadius: 20,
        elevation: 10,
        shadowColor: "black",
        borderWidth: 2,
        borderColor: "white",
        borderCurve: 3,
        paddingBottom: 50
    },
    moves: {
        marginVertical: 10
    },
    movesDetails: {
        color: "white",
        fontSize: 20
    }
})
