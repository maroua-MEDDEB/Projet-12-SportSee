import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  NavBarH,
  ImgLogo,
  NavBarHList,
  NavBarHListLink,
} from "../NavBarHorizontal/index.style.js";
const NavBarHorizontal = () => {
  return (
    <>
      <NavBarH>
        <div className="navBarH_img">
          <Link to={"/"}>
            <ImgLogo src={logo} alt="image_logo" />
          </Link>
        </div>
        <NavBarHList>
          <li style={{ listStyle: "none" }}>
            <NavBarHListLink href={"/"}>Accueil</NavBarHListLink>
          </li>
          <li style={{ listStyle: "none" }}>
            <NavBarHListLink href={"/profil"}>Profil</NavBarHListLink>
          </li>
          <li style={{ listStyle: "none" }}>
            <NavBarHListLink href={"/réglage"}>Réglage</NavBarHListLink>
          </li>
          <li style={{ listStyle: "none" }}>
            <NavBarHListLink href={"/communauté"}>Communauté</NavBarHListLink>
          </li>
        </NavBarHList>
      </NavBarH>
    </>
  );
};

export default NavBarHorizontal;
