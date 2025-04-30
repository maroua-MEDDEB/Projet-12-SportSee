import { useParams, useNavigate } from "react-router-dom";
import CardInfos from "../../components/CardInfos/CardInfos";
import calorieIcon from "../../assets/images/icons_cards/icon-calorie.png";
import carbohydrateIcon from "../../assets/images/icons_cards/icon-carbohydrate.png";
import proteinIcon from "../../assets/images/icons_cards/icon-protein.png";
import lipidIcon from "../../assets/images/icons_cards/icon-lipid.png";
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
import { User } from "../../model/User";
import { ActivityDays } from "../../components/AcivityDays/ActivityDays";
import ScoreUser from "../../components/ScoreUser/ScoreUser";
import { SessionDuration } from "../../components/SessionDuration/SessionDuration";
import { RadarActivities } from "../../components/RadarActivities/RadarActivities";

import Error from "../../Pages/Error/Error";
import axios from "axios";

function SportResultsTraining() {
  const [userData, setUserData] = useState({
    mainInfos: {},
    activity: {},
    averageSessions: {},
    performance: {},
  });

  const { userId } = useParams(); // déstrcuturer cet ensemble du poramètre - accéder au parapmètres de l'url courant
  // const api = false;

  function ReturnNutriments() {
    const icons_unit_infos = ["kCal", "g", "g", "g"];

    const nutriments = [
      { icon_type: calorieIcon, text_type: "Calories" },
      { icon_type: proteinIcon, text_type: "Proteines" },
      { icon_type: carbohydrateIcon, text_type: "Glucides" },
      { icon_type: lipidIcon, text_type: "Lipides" },
    ];
    let values = new Array(5);
    values = Object.values(userData?.mainInfos?.keyData);
    console.log(userData?.mainInfos?.keyData);
    return (
      <>
        {nutriments.map((el, index) => {
          return (
            <CardInfos
              key={index}
              text_type={el.text_type}
              icon_type={el.icon_type}
              value={values[index]}
              unity={icons_unit_infos[index]}
            />
          );
        })}
      </>
    );
  }

  async function getUserAllData() {
    try {
      const mainInfos = await axios.get(`http://localhost:3000/user/${userId}`);
      setUserData((prev) => ({ ...prev, mainInfos: mainInfos.data }));

      const activity = await axios.get(
        `http://localhost:3000/user/${userId}/activity`
      );
      console.log(activity.data);
      setUserData((prev) => ({ ...prev, activity: activity.data }));

      const averageSessions = await axios.get(
        `http://localhost:3000/user/${userId}/average-sessions`
      );
      console.log(averageSessions.data.sessions);
      setUserData((prev) => ({
        ...prev,
        averageSessions: averageSessions.data,
      }));

      const performance = await axios.get(
        `http://localhost:3000/user/${userId}/performance`
      );
      setUserData((prev) => ({ ...prev, performance: performance.data }));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    getUserAllData();
  }, []);

  useEffect(() => {
    console.log("average sessions ", userData.averageSessions);
  }, [userData]);

  return (
    <ContainerProfilUser>
      <header>
        <HeaderTitle>
          <h1>Bonjour</h1>
          <NameUser> {userData.mainInfos.userInfos?.firstName}</NameUser>
        </HeaderTitle>
        <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      </header>

      <SectionInfos>
        <ItemsActivitySport>
          {/* TOP: full-width ActivityDays */}
          <Item_activity style={{ width: "100%" }}>
            {userData.activity.sessions && (
              <ActivityDays
                userId={userId}
                data={userData.activity}
                activiytDaysApi={userData.activity.sessions}
                api={true}
              />
            )}
          </Item_activity>

          {/* BELOW: three boxes side-by-side */}
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <ItemsMeasure style={{ flex: 1 }}>
              {userData.averageSessions.sessions?.length > 0 && (
                <SessionDuration
                  userId={userId}
                  data={userData.averageSessions}
                  averageApi={userData.averageSessions}
                  api={true}
                />
              )}
            </ItemsMeasure>

            <ItemsMeasure style={{ flex: 1 }}>
              {userData.performance.data?.length > 0 && (
                <RadarActivities
                  userId={userId}
                  data={userData.performance}
                  performancesApi={userData.performance}
                  api={true}
                />
              )}
            </ItemsMeasure>

            <ItemsMeasure style={{ flex: 1 }}>
              {userData.mainInfos.todayScore && (
                <ScoreUser
                  userId={userId}
                  data={userData.mainInfos.todayScore}
                  userApiScore={userData.mainInfos.todayScore}
                  api={true}
                />
              )}
            </ItemsMeasure>
          </div>
        </ItemsActivitySport>

        {/* You can handle cards later here */}
        <GridCards>
          <CardInformations>
            {userData.mainInfos?.keyData && <ReturnNutriments />}
          </CardInformations>
        </GridCards>
      </SectionInfos>
    </ContainerProfilUser>
  );
}

export default SportResultsTraining;
