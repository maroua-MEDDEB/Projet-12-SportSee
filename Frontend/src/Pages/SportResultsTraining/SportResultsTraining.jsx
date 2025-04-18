import { useParams, useNavigate } from "react-router-dom";
import CardInfos from "../../components/CardInfos/CardInfos";
import {
  ContainerProfilUser,
  HeaderTitle,
  NameUser,
  SectionInfos,
  Item_activity,
  ItemsActivitySport,
  GridCards,
  CardInformations,
  ItemsMeasure,
} from "./index.style";
import { useState, useEffect } from "react";
import { getAllDataMocked } from "../../service/mockedAPI";
import { User } from "../../model/User";
import { ActivityDays } from "../../components/AcivityDays/ActivityDays";
import ScoreUser from "../../components/ScoreUser/ScoreUser";
import { SessionDuration } from "../../components/SessionDuration/SessionDuration";
import { RadarActivities } from "../../components/RadarActivities/RadarActivities";
import { useSportSeeApi } from "../../service/hook/index.js";
import Error from "../../Pages/Error/Error";

const initialState = {
  isLoading: true,
  error: null,
  isDataLoaded: false,
  data: null,
};

function SportResultsTraining() {
  const [state, setState] = useState(initialState);

  const { userId, api } = useParams(); // déstrcuturer cet ensemble du poramètre - accéder au parapmètres de l'url courant
  // const api = false;

  const navigate = useNavigate();
  if (!["12", "18"].includes(userId)) {
    navigate("/Error");
  }

  const {
    userApi,
    sessionsApi,
    performancesApi,
    averageApi,
    isApiLoading,
    errorApi,
  } = useSportSeeApi(userId);

  const { isLoading, isDataLoaded, data: mockedData, error } = state;

  const firstName = new User(userId, mockedData)._firstName || "unknown user";

  const { nutriments, values } = new User(
    userId,
    mockedData?.userMainData,
    false
  )._keyData;
  // console.log(nutriments);

  const icons_unit_infos = ["kCal", "g", "g", "g"];

  const showTypes = nutriments.map((el, index) => {
    return (
      <CardInfos
        key={index}
        text_type={el.text_type}
        icon_type={el.icon_type}
        value={values[index]}
        unity={icons_unit_infos[index]}
      />
    );
  });

  useEffect(() => {
    /**
     * récupérer les données des deux utilisateurs
     * Retrieves all data using a mocked API endpoint.
     *@return {Promise} A promise that resolves with the data response.
     */
    async function getMockedData() {
      try {
        const userData = await getAllDataMocked();

        setState({
          ...state,
          data: userData,
          isDataLoaded: true,
          error: "",
          isLoading: false,
        });
      } catch (error) {
        setState({ ...state, error: error, isLoading: false });
      }
    }
    if (["12", "18"].includes(userId)) {
      getMockedData();
    }
    setState({ ...state, isLoading: false });
    console.log("state: ", state);
  }, [navigate, userId]);

  if (isLoading || isApiLoading) return <p> loading...</p>;

  if (errorApi || error) {
    return <Error />;
  }

  if (isDataLoaded) {
    return (
      <>
        <ContainerProfilUser>
          <header>
            <HeaderTitle>
              <h1>Bonjour</h1>
              <NameUser>
                {" "}
                {!isLoading && api ? userApi?.userInfos?.firstName : firstName}
              </NameUser>
            </HeaderTitle>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </header>

          <SectionInfos>
            <ItemsActivitySport>
              <Item_activity>
                <ActivityDays
                  userId={userId}
                  data={mockedData}
                  activiytDaysApi={sessionsApi?.sessions}
                  api={api}
                />
              </Item_activity>
              <ItemsMeasure>
                <SessionDuration
                  userId={userId}
                  data={mockedData}
                  averageApi={averageApi}
                  api={api}
                />
                {/* <div>RadarActivities</div> */}
                <RadarActivities
                  userId={userId}
                  data={mockedData}
                  performancesApi={performancesApi}
                  api={api}
                />
                <ScoreUser
                  userId={userId}
                  data={mockedData}
                  userApiScore={userApi.score}
                  api={api}
                />
              </ItemsMeasure>
            </ItemsActivitySport>
            <GridCards>
              <CardInformations>{showTypes}</CardInformations>
            </GridCards>
          </SectionInfos>
        </ContainerProfilUser>
      </>
    );
  }
}

export default SportResultsTraining;
