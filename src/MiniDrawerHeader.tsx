import * as React from 'react';
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import logo from "./logo_sam.png"

import {Home, Info, LocalAtm, MonetizationOn, SettingsApplicationsRounded as Settings} from "@mui/icons-material"
import {CustomerSearchIcon} from './CustomerSearchIcon'
import {TokenClaimsIcon} from './TokenClaimsIcon'
import {BonusBetsIcon} from './BonusBetsIcon'
import {BetWitMatesIcon} from './BetWithMatesIcon'
import {AdminIcon} from './AdminIcon'


const drawerWidth = 240;

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

export default function MiniDrawerHeader() {
    const logoSam = logo;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const toggleDrawerOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                {/* Top bar */}
                <MuiAppBar data-automation-id="app-bar" elevation={0}>
                    <Toolbar variant="dense" disableGutters={true}>
                        <Box
                            component="img"
                            src={logoSam}
                            alt="logo"
                            width="32px"
                            height="32px"
                            mr={1}
                        />
                        {/*<Typography flexGrow={1} variant="h5" color="inherit">*/}
                        {/*    <Link*/}
                        {/*        data-automation-id="app-title"*/}
                        {/*        to="/"*/}
                        {/*        sx={{ color: "inherit", textDecoration: "inherit" }}>*/}
                        {/*        SAM*/}
                        {/*    </Link>*/}
                        {/*</Typography>*/}
                    </Toolbar>
                </MuiAppBar>
                <Drawer variant="permanent" open={open}>
                    <List sx={{paddingTop: 0, paddingBottom: 0}}>
                        <ListItem sx={{paddingLeft: theme.spacing(1)}}>
                            <ListItemIcon sx={{minWidth: 30}}>
                                <IconButton
                                    color="primary"
                                    aria-label="open drawer"
                                    onClick={toggleDrawerOpen}
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
                                <ListItemText primary={text} sx={{color: "#0077CC"}} />
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
                                <ListItemText primary={text} sx={{color: "#0077CC"}} />
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
                                <ListItemText primary={text} sx={{color: "#0077CC"}} />
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
                                <ListItemText primary={text} sx={{color: "#0077CC"}} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List>
                        {['Safer Gambling'].map((text, index) => (
                            <ListItem button key={text} sx={{paddingLeft: theme.spacing(1)}}>
                                <ListItemIcon sx={{minWidth: 30}}>
                                    {text === "Safer Gambling" ? <Info color="primary"/> : undefined}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color: "#0077CC"}} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{position: "absolute", bottom: theme.spacing(13), width: "100%"}}/>
                    <List sx={{position: "absolute", bottom: theme.spacing(5)}}>
                        {['Admin'].map((text, index) => (
                            <ListItem button key={text} sx={{paddingLeft: theme.spacing(1)}}>
                                <ListItemIcon sx={{minWidth: 30}}>
                                    {text === "Admin" ? <AdminIcon color="primary"/> : undefined}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color: "#0077CC"}} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
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
    );
}
