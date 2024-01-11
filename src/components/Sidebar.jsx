import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css';

const Sidebar = () => {
    return(
        <Menu>
            <a href="#d1" className="menu-item">صيانة ثلاجات</a>
            <a href="#d2" className="menu-item">صيانة ميني بار</a>
            <a href="#d3" className="menu-item">صيانة ديب فريزير</a>
            <a href="#d4" className="menu-item">صيانة غسالات ملابس</a>
            <a href="#d5" className="menu-item">صيانة مجففات ملابس</a>
            <a href="#d6" className="menu-item">صيانة غسالات الاطباق</a>
        </Menu>
    )
}

export default Sidebar;