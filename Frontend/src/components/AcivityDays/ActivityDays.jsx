import PropTypes from "prop-types";
import {
  ActivityDaysContainer,
  ActivityDaysTitle,
  ActivityDaysLegend,
  LegendDetail,
  ColorBullet,
} from "./index.style.js";
import { Activity } from "../../model/Activity.js";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "../CustomTooltip/CustomTooltip.jsx";

export function ActivityDays({ userId, data, api = false, activiytDaysApi }) {
  const activityDays = new Activity(userId, data?.userActivities)._activities;
  console.log("activityDays : ", activityDays);

  const activitiesDaysApi = new Activity(
    userId,
    data?.userActivities,
    activiytDaysApi
  )._activitiesApi;
  console.log("activitiesDaysApi : ", activitiesDaysApi);

  return (
    <ActivityDaysContainer>
      <ActivityDaysTitle>Activité quotidienne</ActivityDaysTitle>

      <ActivityDaysLegend>
        <LegendDetail>
          <ColorBullet background="#282D30"></ColorBullet>
          Poids (kg)
        </LegendDetail>
        <LegendDetail>
          <ColorBullet background="#ff0101"></ColorBullet>
          Calories brûlées (kCal)
        </LegendDetail>
      </ActivityDaysLegend>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={api ? activitiesDaysApi : activityDays}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#9B9EAC"
          />
          <XAxis
            dataKey="day"
            dy={16}
            padding={{ left: -48, right: -48 }}
            stroke="#9B9EAC"
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 2"]}
            allowDecimals={false}
            dx={48}
            orientation="right"
            stroke="#9B9EAC"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, "dataMax + 50"]}
            hide={true}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill="#282d30"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill="#ff0101"
            radius={[50, 50, 0, 0]}
          />
          <Tooltip
            wrapperStyle={{ outlineStyle: "none" }}
            content={<CustomTooltip />}
            cursor={{
              fill: "transparent",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </ActivityDaysContainer>
  );
}

ActivityDays.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  api: PropTypes.string,
  activiytDaysApi: PropTypes.array,
};
