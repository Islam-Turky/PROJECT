import { CgMenuRightAlt } from 'react-icons/cg';
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Header = () => {
    const [ sidebar, setSidebar ] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return(
        <div id="Header" >
            <div id="LOGO">
                <a href="#">
                    <img src="/LOGO.webp" alt="logo" />
                </a>
            </div>
            <div id="LINKS">
                <a href="#">المدونة</a>
                <a href="#d6">صيانة غسالات الاطباق</a>
                <a href="#d5">صيانة مجففات ملابس</a>
                <a href="#d4">صيانة غسالات ملابس</a>
                <a href="#d3">صيانة ديب فريزير</a>
                <a href="#d2">صيانة ميني بار</a>
                <a href="#d1" >صيانة ثلاجات</a>
            </div>
            <div id="HUMBURGER">
                <i className="menuicon">
                    <CgMenuRightAlt onClick={showSidebar} />
                </i>
                <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
                    <i className="menuicon"><IoMdClose onClick={showSidebar}/></i>
                    <div className="items">
                    <a href="#d1"className="active" >صيانة ثلاجات</a>
                        <a href="#d2">صيانة ميني بار</a>
                        <a href="#d3">صيانة ديب فريزير</a>
                        <a href="#d4">صيانة غسالات ملابس</a>
                        <a href="#d5">صيانة مجففات ملابس</a>
                        <a href="#d6">صيانة غسالات الاطباق</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;