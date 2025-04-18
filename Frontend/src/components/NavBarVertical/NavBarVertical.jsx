import { SportIcon } from "../index";
import meditation from "../../assets/images/icons_navbar/meditation.png";
import swimming from "../../assets/images/icons_navbar/swimming.png";
import cycling from "../../assets/images/icons_navbar/cycling.png";
import bodybuilding from "../../assets/images/icons_navbar/bodybuilding.png";
import { NavBarV, Copyright } from "./index.style";

const NavBarVertical = () => {
  const arrayIcons = [meditation, swimming, cycling, bodybuilding];

  return (
    <>
      <NavBarV>
        <div className="icons">
          {arrayIcons.map((icon, index) => {
            return <SportIcon icon={icon} key={index} />;
          })}
        </div>
        <Copyright> Copiryght, SportSee 2020</Copyright>
      </NavBarV>
    </>
  );
};

export default NavBarVertical;
