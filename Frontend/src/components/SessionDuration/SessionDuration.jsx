// @ts-nocheck
import PropTypes from "prop-types";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Session } from "../../model/Session";

import {
  AverageSessionsContainer,
  AverageSessionsTitle,
  TooltipContainer,
} from "./index.styles.js";

/**
 * Component for showing  average sessions in a chart
 *
 * @component AverageSessionsChart
 * @param   {string}  userId  User Id
 * @param   {Object}  data   all User data
 * @param   {boolean}  api   is Api available?
 * @param  {Object}  averageApi   User data from Api
 * @return {JSX.Element}
 */
export function SessionDuration({ userId, data, api = false, averageApi }) {
  const sessions = new Session(userId, data?.userAverageSession)._sessions;
  console.log("sessions: ", sessions);

  const sessionsApi = new Session(userId, data?.userAverageSession, averageApi)
    ._sessionsApi;
  console.log("sessionsApi: ", sessionsApi);

  return (
    <AverageSessionsContainer>
      <AverageSessionsTitle>
        Durée moyenne des
        <br />
        sessions
      </AverageSessionsTitle>

      <ResponsiveContainer aspect={1} width="100%" height="100%">
        <LineChart
          data={sessions}
          outerRadius="75%"
          margin={{ top: 0, right: 12, bottom: 48, left: 12 }}
        >
          <XAxis
            dataKey="day"
            stroke="#ffffff"
            axisLine={false}
            dy={10}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 60"]}
            hide={true}
            width={400}
            height={300}
          />
          <Line
            dataKey="sessionLength"
            type={`${userId === "18" ? "step" : "monotone"}`}
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outlineStyle: "none" }}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </AverageSessionsContainer>
  );
}

SessionDuration.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  api: PropTypes.bool,
  averageApi: PropTypes.object,
};

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
