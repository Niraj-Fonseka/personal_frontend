import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Avatar  from '@material-ui/core/Avatar'
import Topography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Topography variant="title" color="inherit">
                        My App
                    </Topography>
                    <Topography align="right" > 
                    <Avatar src="img_avatar.png" style={{paddingLeft: '20px'}} />
                    </Topography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;
