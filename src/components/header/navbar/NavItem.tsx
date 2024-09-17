import { NavLink } from "react-router-dom";

const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li className="header_navbar_menu_item">
      <NavLink to={href} className="header_navbar_menu_item_link">
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
