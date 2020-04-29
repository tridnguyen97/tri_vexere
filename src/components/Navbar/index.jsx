import React, { Component } from 'react';

import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
  
  import {Link} from 'react-router-dom'
  
  import MaterialIcon from '@material/react-material-icon';
  
class Navbar extends Component {
    render() {

        const linkStyle = {color:"white",textDecoration:"none"}
        const linkStyle2 = {...linkStyle,marginRight:"20px"}
        return (
            <div>
                <TopAppBar>
                    <TopAppBarRow>
                        <TopAppBarSection align='start'>
                        <TopAppBarIcon navIcon tabIndex={0}>
                            <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')}/>
                        </TopAppBarIcon>
                        <TopAppBarTitle>
                            <Link to="/" style ={linkStyle}>Vexere</Link>
                        </TopAppBarTitle>
                        </TopAppBarSection>
                        <TopAppBarSection align='end' role='toolbar'>

                        <Link to="/stations" style ={linkStyle2}>Bến xe</Link>
                        <Link to="/trips" style ={linkStyle2}>Chuyến Đi</Link>
                        <Link to="/tickets" style ={linkStyle2}>Vé</Link>
                        <Link to="/clients" style ={linkStyle2}>Khách hàng</Link>
                        <Link to="/profile" style ={linkStyle2}>Hồ sơ</Link>
                    
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust>
              My exciting content!
            </TopAppBarFixedAdjust>
        </div>
                      
        );
    }
}

export default Navbar;