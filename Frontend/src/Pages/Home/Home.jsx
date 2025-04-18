import { Profil } from "../../components";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import {
  HomeContainer,
  HeaderHomeContainer,
  Titlespan,
  TitleDiv,
  ApiText,
  LabelContainer,
} from "./index.style.js";
import getAllUsersData from "../../service/usersServices.js";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("bonjour");
    getAllUsersData().then((result) => {
      console.log(result);
      setData(result.data);
    });
  }, []);

  return (
    //page intermédiaire vers la page d'utilisateur
    <>
      <HomeContainer>
        {/* <HeaderHomeContainer>
          <Titlespan>Bienvenue!</Titlespan>
          <LabelContainer>
            <label>
              <ApiText>Api</ApiText>
              <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#ff0101"
              />
            </label>
          </LabelContainer>
        </HeaderHomeContainer> */}
        <TitleDiv>
          {data?.map((element, index) => (
            <>
              <Profil
                key={index}
                userId={element?.userId}
                userInfos={element.userInfos}
                imageSrc={`http://localhost:3000/${element?.id}.png`}
                api={true}
                data={element}
              />
            </>
          ))}
        </TitleDiv>
      </HomeContainer>
    </>
  );
}

export default Home;
