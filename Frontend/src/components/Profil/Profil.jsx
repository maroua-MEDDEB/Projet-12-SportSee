import React from "react";
import { Userimg, UserName, UserProfile, ListUsers } from "./index.style.js";
import PropTypes from "prop-types";

/**
 * Component for showing  Profile
 *
 * @component Profile
 * @param   {string}  userId  User Id
 * @param   {string}  imageSource
 * @param   {boolean}  api   is Api available?
 * @return {JSX.Element}
 */
function Profil({ userId, userInfos, imageSrc, api }) {
  // transmettre l'id du de l'utilisateur vers la page SportReultTraining.
  // let userInformations = `/sportResults/${userId}`;

  return (
    <>
      <ListUsers>
        <li style={{ listStyle: "none", textAlign: "center" }}>
          <UserProfile
            href={
              api ? `/sportResults/${userId}/${api}` : `/sportResults/${userId}`
            }
          >
            {/* <UsercontainerHome> */}
            {/* <img src={imageSrc} alt="" /> */}
            <Userimg src={imageSrc} alt="" />
            <UserName>
              {api ? userInfos.firstName.split("Mocked") : userInfos.firstName}
            </UserName>
            {/* </UsercontainerHome> */}
          </UserProfile>
        </li>
      </ListUsers>
    </>
  );
}

Profil.prototypes = {
  userId: PropTypes.number.isRequired,
  userInfos: PropTypes.object.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
export default Profil;
