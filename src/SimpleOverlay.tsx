import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Home, LocalAtm, MonetizationOn, SettingsApplicationsRounded as Settings} from "@mui/icons-material";
import {CustomerSearchIcon} from "./CustomerSearchIcon";
import {TokenClaimsIcon} from "./TokenClaimsIcon";
import {BonusBetsIcon} from "./BonusBetsIcon";
import {BetWitMatesIcon} from "./BetWithMatesIcon";
import {useTheme} from "@mui/material/styles";

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const theme = useTheme();

    const list = () => (
            <Box
                sx={{width: 240}}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List sx={{paddingTop: 0, paddingBottom: 0}}>
                    <ListItem sx={{paddingLeft: theme.spacing(1)}}>
                        <ListItemIcon sx={{minWidth: 30}}>
                            <IconButton
                                color="primary"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                edge="start"
                                sx={{paddingLeft: 1.5}}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                </List>
                <List sx={{paddingTop: 0}}>
                    {['Home', 'Customer Finder'].map((text, index) => (
                        <ListItem button key={text} sx={{paddingLeft: theme.spacing(1)}}>
                            <ListItemIcon sx={{minWidth: 30}}>
                                {text === "Home" ? <Home color="primary"/> : undefined}
                                {text === "Customer Finder" ? <CustomerSearchIcon color="primary"/> : undefined}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{color: "#0077CC"}}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['Token Management', 'Token Claims', 'Bonus Bet Management'].map((text, index) => (
                        <ListItem button key={text} sx={{paddingLeft: theme.spacing(1)}}>
                            <ListItemIcon sx={{minWidth: 30}}>
                                {text === "Token Management" ? <MonetizationOn color="primary"/> : undefined}
                                {text === "Token Claims" ? <TokenClaimsIcon color="primary"/> : undefined}
                                {text === "Bonus Bet Management" ? <BonusBetsIcon color="primary"/> : undefined}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{color: "#0077CC"}}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['Token Payouts', 'Manual Resulting Config'].map((text, index) => (
                        <ListItem button key={text} sx={{paddingLeft: theme.spacing(1)}}>
                            <ListItemIcon sx={{minWidth: 30}}>
                                {text === "Token Payouts" ? <LocalAtm color="primary"/> : undefined}
                                {text === "Manual Resulting Config" ? <Settings color="primary"/> : undefined}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{color: "#0077CC"}}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['Bet With Mates'].map((text, index) => (
                        <ListItem button key={text} sx={{paddingLeft: theme.spacing(1)}}>
                            <ListItemIcon sx={{minWidth: 30}}>
                                {text === "Bet With Mates" ? <BetWitMatesIcon color="primary"/> : undefined}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{color: "#0077CC"}}/>
                        </ListItem>
                    ))}
                </List>
            </Box>
        )
    ;

    return (
        <div>
            <>
                <Button onClick={toggleDrawer}>Open</Button>
                <Drawer
                    open={open}
                    onClose={toggleDrawer}
                >
                    {list()}
                </Drawer>
            </>
        </div>
    );
}
