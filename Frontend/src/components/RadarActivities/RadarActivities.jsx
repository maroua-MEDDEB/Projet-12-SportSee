import PropTypes from "prop-types";
import { RadarAc } from "../../model/RadarAc";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { RadarContainer } from "./index.style.js";

/**
 * Component for showing  User Performances
 *
 * @component RadarActivities
 * @param   {string}  userId  User Id
 * @param   {Object}  data   all User data
 * @return {JSX.Element}
 */
export function RadarActivities({
  userId,
  data,
  api = false,
  performancesApi,
}) {
  const performances = new RadarAc(userId, data)._activities;
  console.log("performances ==> ", performances);

  const performances_Api = new RadarAc(userId, data, performancesApi)
    ._activitiesApi;
  console.log("performances_Api ==> ", performances_Api);

  return (
    <RadarContainer>
      <ResponsiveContainer aspect={1} width="100%" height="100%">
        <RadarChart
          data={performances}
          outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
          width="100%"
          height="100%"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="activity"
            stroke="white"
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 10,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            fill="#ff0101"
            fillOpacity={0.7}
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </RadarContainer>
  );
}

RadarActivities.prototypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
// export default RadarActivities;
