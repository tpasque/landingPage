import React from 'react'
import { Center } from 'react-layout-components'
import blackLogo from '../../resources/blackLogo.png'
import trees from '../../resources/trees.png'

const Hero = () => {
    return (
        <Center column style={{ paddingTop: 50, paddingBottom: 50, backgroundImage: `url(${trees})`, backgroundSize: 'cover' }}>
            <img src={blackLogo} style={{ height: 40 }} />
            <h1>Mercantyle</h1>
            <p>Design. Development. Branding.</p>
        </Center>
    )
}

export default Hero
