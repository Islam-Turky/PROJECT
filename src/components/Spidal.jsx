import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TagIcon from '@mui/icons-material/Tag';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

const actions = [
{ icon: <FacebookIcon />, name: 'Facebook', color: 'blue', route: '#' },
{ icon: <InstagramIcon />, name: 'Instagram', color: 'purple', route: '#' },
{ icon: <InstagramIcon />, name: 'Whatsapp', color: 'green', route: '#' },
{ icon: <LocalPhoneIcon />, name: 'Call', color: 'primary', route: 'tel:+201015632015' },
];

export default function BasicSpeedDial() {
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 16, right: 16, color: 'red'}}
            icon={<TagIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                sx={{ color: action.color }}
                onClick={() => window.location.href = action.route}
                >
                </SpeedDialAction>
            ))}
        </SpeedDial>
    );
}