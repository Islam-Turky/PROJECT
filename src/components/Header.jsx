import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useState } from 'react';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
    }),
    position: 'relative',
}),
);

const AppBar = styled(MuiAppBar, {
shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
display: 'flex',
alignItems: 'center',
padding: theme.spacing(0, 1),
// necessary for content to be below app bar
...theme.mixins.toolbar,
justifyContent: 'flex-start',
}));

export default function Header() {
const theme = useTheme();
const [open, setOpen] = useState(false);

const handleDrawerOpen = () => {
    setOpen(true);
};

const handleDrawerClose = () => {
    setOpen(false);
};

const sideIcons = [
    {
        id: 1,
        name: 'الرئيسيه',
        route: '#',
        icon: <HomeIcon />
    },
    {
        id: 2,
        name: 'من نحن',
        route: '#WRAPPER',
        icon: <InfoIcon />
    },
    {
        id: 4,
        name: 'الماركات',
        route: '#WHO',
        icon: <EngineeringIcon />
    },
    {
        id: 3,
        name: 'تواصل معنا',
        route: '#contacts',
        icon: <AlternateEmailIcon />
    },
]

return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={open} sx={{
        background: '#1A202C',
    }}>
        <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1, paddingTop: '10px' }} component="div">
            <a href="/">
                <img src="/LOGO.webp" alt="logo" width={100}/>
            </a>
        </Typography>
        <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
        >
            <MenuIcon sx={{ color: '#fff' }}/>
        </IconButton>
        </Toolbar>
    </AppBar>
    <Drawer
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
        },
        }}
        variant="persistent"
        anchor="right"
        open={open}
    >
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {sideIcons.map((text) => (
            <ListItem key={text.id} disablePadding>
                <a href={text.route} style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton key={text.id}>
                        <ListItemIcon>
                            {text.icon}
                        </ListItemIcon>
                    <ListItemText primary={text.name} />
                </ListItemButton>
                </a>
            </ListItem>
        ))}
        </List>
    </Drawer>
    </Box>
);
}
