import React from 'react'
import { Center } from 'react-layout-components'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import whiteLogo from '../../resources/whiteLogo.png'

const Header = () => {
    return (
        <AppBar
            title={
                <Center style={{ display: 'inline-block' }}>
                    <img src={whiteLogo} style={{ height: 30, marginRight: 10, marginBottom: -5 }} /> <span>Mercantyle</span>
                </Center>
            }
            showMenuIconButton={false}
            iconElementRight={<FlatButton label="Contact Us" />}
        />
    )
}

export default Header
