import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';

function Navigation(props) {
   let checkAuthorization = props.checkAuthorization;
    let setShowFlag = props.setShowFlag;

    return (
        <Nav
            activeKey="/table"
        >
            {
                checkAuthorization() ?
                    <Nav.Item>
                        <Nav.Link href="/table">Table</Nav.Link>
                    </Nav.Item> : <Button onClick = {() => setShowFlag(true)}>Sign in</Button> 
            }
        </Nav>
    );
}

export default Navigation;