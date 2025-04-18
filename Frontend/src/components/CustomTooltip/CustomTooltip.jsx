import PropTypes from "prop-types";
import { TooltipContainer, TooltipLine } from "../CustomTooltip/index.style";
import React from "react";

/**
 * Component for showing  tooltip  pop-up
 *
 * @component CustomTooltip
 * @param   {boolean}  active
 * @param   {Array} payload
 * @return {JSX.Element}
 */
export function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <TooltipContainer>
        <TooltipLine
          // @ts-ignore
          background="##282D30"
        >
          {`${payload[0].value} kg`}
        </TooltipLine>
        <TooltipLine
          // @ts-ignore
          background="#E60000"
        >
          {`${payload[1].value} kCal`}
        </TooltipLine>
      </TooltipContainer>
    );
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
