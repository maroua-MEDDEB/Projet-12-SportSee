import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Score } from "../../model/Score";
import { ScoreContainer, TextScore, ParagraphScore } from "./index.style";
import PropTypes from "prop-types";

function ScoreUser({ userId, data, api = false, userApiScore }) {
  //scoreData
  const scoreData = new Score(userId, data, api);
  console.log("scoreData : ", scoreData);

  const scoreDataApi = new Score(userId, data, userApiScore);
  console.log("scoreDataApi : ", scoreDataApi.scoreApi);

  const pieData = [
    {
      name: "completed",
      value: api ? scoreDataApi.scoreApi : scoreData.score,
      fillColor: "red",
    },
    {
      name: "not-completed",
      value: 1 - scoreData.score,
      fillColor: "transparent",
    },
  ];
  // console.log(pieData);
  return (
    <ScoreContainer>
      <TextScore>Score</TextScore>
      {/* <ResponsiveContainer width="700" height="700"> */}
      <PieChart width={160} height={160}>
        <Pie
          data={pieData}
          dataKey="value"
          innerRadius={67}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fillColor}
              cornerRadius="50%"
            />
          ))}
        </Pie>
      </PieChart>
      {/* </ResponsiveContainer> */}
      <ParagraphScore>
        <span>{scoreData.score}</span> <br /> de votre <br />
        objectif
      </ParagraphScore>
    </ScoreContainer>
  );
}

ScoreUser.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  api: PropTypes.string,
  userApiScore: PropTypes.number,
};

export default ScoreUser;
