import React from 'react';
import {Link} from "react-router-dom"
import {HomeRounded} from "@mui/icons-material";
import {CustomerSearchIcon} from "../../images/CustomerSearchIcon";
import ListItemText from "@mui/material/ListItemText";


const NavListItem = (menuText: string) => {

    switch (menuText) {
        case "Home":
            return (
                <Link to="/home">
                    <HomeRounded color="primary"/>
                    <ListItemText primary={menuText} sx={{color: "#0077CC"}}/>
                </Link>
            )
        case "Customer Finder":
            return <CustomerSearchIcon color="primary"/>
        default:
            return <HomeRounded color="primary"/>
    }
}

// export default NavListItem
export {}
