import { useLocation } from "react-router-dom";
import "../../styles/_header.scss";
import { ABOUT } from "../../utils";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  console.log(location);
  return (
    <div className="header">
      <Logo />
      <Navbar />
      {pathname === ABOUT && <LanguageSelector />}
    </div>
  );
};

export default Header;
