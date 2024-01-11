import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
    return(
        <div id="Header" >
            <div id="LOGO">
                
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
                <CgMenuRightAlt />
            </div>
        </div>
    )
}

export default Header;