import { Profil } from "../../components";
import React, { useEffect, useState } from "react";
import { getAllDataMocked } from "../../service/mockedAPI";
import Switch from "react-switch";
import {
  HomeContainer,
  HeaderHomeContainer,
  Titlespan,
  TitleDiv,
  ApiText,
  LabelContainer,
} from "./index.style.js";

const initialState = {
  isLoading: true,
  error: null,
  data: null,
};

function Home() {
  const [state, setState] = useState(initialState);

  const { data, isLoading } = state;

  const [checked, setChecked] = useState(false);

  const handleChange = (prev) => {
    setChecked(prev, !prev);
  };

  useEffect(() => {
    /**
     * Retrieves all data using a mocked API endpoint.
     *@return {Promise} A promise that resolves with the data response.
     */
    async function getMockedData() {
      try {
        const userData = await getAllDataMocked();

        setState({
          ...state,
          data: userData,

          error: "",
          isLoading: false,
        });
      } catch (error) {
        setState({ ...state, error, isLoading: false });
      }
    }
    getMockedData();
  }, []);

  if (isLoading) return <p> loading...</p>;

  return (
    //page intermédiaire vers la page d'utilisateur
    <>
      <HomeContainer>
        <HeaderHomeContainer>
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
        </HeaderHomeContainer>
        <TitleDiv>
          {data?.userMainData?.map((element, index) => (
            <Profil
              key={index}
              userId={element?.userId}
              userInfos={element.userInfos}
              imageSrc={`/images/${element.userInfos.firstName}.png`}
              api={checked}
              data={element}
            />
          ))}
        </TitleDiv>
      </HomeContainer>
    </>
  );
}

export default Home;
