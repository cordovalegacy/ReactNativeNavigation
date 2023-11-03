
// !Packages
import { SafeAreaView, ImageBackground } from 'react-native'

// !Styles
import { app } from '../styles/app'

export default function AppWrapper({ children }) {
    return (
        <SafeAreaView style={app.screen}>
            <ImageBackground
                style={app.imageBg}
                source={require('../assets/poke-bg.png')}
                resizeMode='cover'>
                {children}
            </ImageBackground>
        </SafeAreaView>
    )
}
