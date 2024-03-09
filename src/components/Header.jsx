// import { CgMenuRightAlt } from 'react-icons/cg';
// import { IoMdClose } from "react-icons/io";
// import { useState } from 'react';

// const Header = () => {
//     const [ sidebar, setSidebar ] = useState(false);
//     const showSidebar = () => setSidebar(!sidebar);
//     return(
//         <div id="Header" >
//             <div id="LOGO">
//                 <a href="#">
//                     <img src="/LOGO.webp" alt="logo" />
//                 </a>
//             </div>
//             <div id="LINKS">
//                 <a href="#">المدونة</a>
//                 <a href="#d6">صيانة غسالات الاطباق</a>
//                 <a href="#d5">صيانة مجففات ملابس</a>
//                 <a href="#d4">صيانة غسالات ملابس</a>
//                 <a href="#d3">صيانة ديب فريزير</a>
//                 <a href="#d2">صيانة ميني بار</a>
//                 <a href="#d1" >صيانة ثلاجات</a>
//             </div>
//             <div id="HUMBURGER">
//                 <i className="menuicon">
//                     <CgMenuRightAlt onClick={showSidebar} />
//                 </i>
//                 <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
//                     <i className="menuicon"><IoMdClose onClick={showSidebar}/></i>
//                     <div className="items">
//                     <a href="#d1"className="active" >صيانة ثلاجات</a>
//                         <a href="#d2">صيانة ميني بار</a>
//                         <a href="#d3">صيانة ديب فريزير</a>
//                         <a href="#d4">صيانة غسالات ملابس</a>
//                         <a href="#d5">صيانة مجففات ملابس</a>
//                         <a href="#d6">صيانة غسالات الاطباق</a>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     )
// }

// export default Header;
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
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
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

return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={open} sx={{
        background: '#fff',
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
            <MenuIcon />
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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
        <Divider />
        <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Drawer>
    </Box>
);
}