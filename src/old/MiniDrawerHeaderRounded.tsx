import * as React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuRounded';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import logo from "../images/logo_sam.png"
import {
    HomeRounded as Home,
    InfoRounded as Info,
    LocalAtmRounded as LocalAtm,
    MonetizationOnRounded as MonetizationOn,
    SettingsRounded as Settings
} from "@mui/icons-material"
import {TokenClaimsIcon} from '../images/TokenClaimsIcon'
import {BonusBetsIcon} from '../images/BonusBetsIcon'
import {BetWitMatesIcon} from '../images/BetWithMatesIcon'
import {AdminIcon} from '../images/AdminIcon'
import {CustomerSearchIcon} from "../images/CustomerSearchIcon";
import {Typography} from "@mui/material";

const drawerWidth = 240
const listLeftMarginHome = -0.5
const listLeftMargin = -0.5
const fontSize = undefined
const listItemIcon = 30

const useStyles = makeStyles(() => ({
    iconSize16: {
        "& svg": {
            fontSize: 20
        }
    }
}))

const openedMixin = (theme: Theme): CSSObject => ({
    marginTop: theme.spacing(6),
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    marginTop: theme.spacing(6),
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(4.8)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(4.8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const MuiAppBar = styled(AppBar)(
    ({theme}) => ({
        position: "fixed",
        paddingLeft: theme.spacing(1.0),
        zIndex: theme.zIndex.drawer + 1,
    }),
);

export default function MiniDrawerHeaderRounded() {
    const classes = useStyles();
    const logoSam = logo;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                {/* Top bar */}
                <MuiAppBar data-automation-id="app-bar" elevation={0}>
                    <Toolbar variant="dense" disableGutters={true}>
                        <Link
                            data-automation-id="app-logo"
                            to="/">
                            <Box
                                component="img"
                                src={logoSam}
                                alt="logo"
                                width="32px"
                                height="32px"
                                mr={1}
                            />
                        </Link>
                    </Toolbar>
                </MuiAppBar>
                {/*todo: Move main into routes*/}
                <Drawer variant="permanent" open={open} sx={{}}>
                    <List sx={{paddingTop: 0, paddingBottom: 0}}>
                        <ListItem>
                            <ListItemIcon className={classes.iconSize16}>
                                <IconButton
                                    aria-label="open drawer"
                                    onClick={toggleDrawer}
                                    edge="start"
                                >
                                    <MenuIcon color="primary"/>
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    </List>
                    <List sx={{paddingTop: 0}}>
                        {['Home', 'Customer Finder'].map((text, index) => (
                            <ListItem button key={text} sx={{marginLeft: theme.spacing(listLeftMarginHome)}}>
                                <ListItemIcon sx={{minWidth: listItemIcon}} className={classes.iconSize16}>
                                    {text === "Home" ?
                                        <Home color="primary"/> : undefined}
                                    {text === "Customer Finder" ?
                                        <CustomerSearchIcon color="primary"/> : undefined}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color: "#0077CC"}}/>
                                {/*{NavListItem(text)}*/}
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List>
                        {['Token Management', 'Token Claims', 'Bonus Bet Management'].map((text, index) => (
                            <ListItem button key={text} sx={{}}>
                                <ListItemIcon
                                    sx={{marginLeft: theme.spacing(listLeftMargin), minWidth: listItemIcon}}
                                    className={classes.iconSize16}>
                                    {text === "Token Management" ?
                                        <MonetizationOn color="primary"/> : undefined}
                                    {text === "Token Claims" ?
                                        <TokenClaimsIcon color="primary"/> : undefined}
                                    {text === "Bonus Bet Management" ?
                                        <BonusBetsIcon color="primary"/> : undefined}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color: "#0077CC"}}/>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List>
                        {['Token Payouts', 'Manual Resulting Config'].map((text, index) => (
                            <ListItem button key={text} sx={{marginLeft: theme.spacing(listLeftMargin)}}>
                                <ListItemIcon sx={{minWidth: listItemIcon}} className={classes.iconSize16}>
                                    {text === "Token Payouts" ?
                                        <LocalAtm color="primary" sx={{fontSize: fontSize}}/> : undefined}
                                    {text === "Manual Resulting Config" ?
                                        <Settings color="primary" sx={{fontSize: fontSize}}/> : undefined}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color: "#0077CC"}}/>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List>
                        {['Bet With Mates'].map((text, index) => (
                            <ListItem button key={text} sx={{marginLeft: theme.spacing(listLeftMargin)}}>
                                <ListItemIcon sx={{minWidth: listItemIcon}} className={classes.iconSize16}>
                                    {text === "Bet With Mates" ?
                                        <BetWitMatesIcon color="primary" sx={{fontSize: fontSize}}/> : undefined}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color: "#0077CC"}}/>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List>
                        {['Safer Gambling'].map((text, index) => (
                            <ListItem button key={text} sx={{marginLeft: theme.spacing(listLeftMargin)}}>
                                <ListItemIcon sx={{minWidth: listItemIcon}} className={classes.iconSize16}>
                                    {text === "Safer Gambling" ?
                                        <Info color="primary" sx={{fontSize: fontSize}}/> : undefined}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color: "#0077CC"}}/>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{position: "absolute", bottom: theme.spacing(13), width: "100%"}}/>
                    <List sx={{position: "absolute", bottom: theme.spacing(5)}}>
                        {['Admin'].map((text, index) => (
                            <ListItem button key={text} sx={{marginLeft: theme.spacing(listLeftMargin)}}
                                      className={classes.iconSize16}>
                                <ListItemIcon sx={{minWidth: listItemIcon}}>
                                    {text === "Admin" ?
                                        <AdminIcon className={classes.iconSize16}
                                                   sx={{color: "gray", fontSize: fontSize}}/> : undefined}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color: "gray"}}/>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box component="main" sx={{
                    flexGrow: 1,
                    p: 3,
                    position: "absolute",
                    marginTop: theme.spacing(4),
                    marginLeft: theme.spacing(4)
                }}>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                        posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </Box>
            </Box>
        </>
    )
        ;
}
