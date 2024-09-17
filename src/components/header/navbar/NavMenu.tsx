import { menus } from "../../../utils";
import NavItem from "./NavItem";

const NavMenu = () => {
  return (
    <ul className="header_navbar_menu">
      {menus?.map((menu) => (
        <NavItem key={menu.href} {...menu} />
      ))}
    </ul>
  );
};

export default NavMenu;
