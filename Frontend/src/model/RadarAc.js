// @ts-nocheck
import { formatData, translateToFr } from "../utils/index.js";

/**Constructor Pattern - Activities Chart
 * @constructor
 * @param {string} userId  userId
 * @param {object} data contains all data
 * @param {object} dataApi contains data from Api
 */
export class RadarAc {
  constructor(userId, data, dataApi) {
    this._userId = userId;
    this._data = data;
    console.log("Model::", this._data);
    this._dataApi = dataApi;
  }

  /**
   * Formats data and get the activities for specified user
   * @return {Array.<Object>} {activity: string, value:number}
   */
  get _activities() {
    let result = {};
    /*
[{userId: 12, kind: {…}, data: Array(6)}]


*/

    this._data.forEach((performance) => {
      console.log(performance);
      if (performance.userId === parseInt(this._userId)) {
        result = { ...performance };
      }
    });
    return formatData(result);
  }

  /**
   * Formats data and get the activities for specified user from Api
   * @return {Array.<Object>} {activity: string, value:number}
   */
  get _activitiesApi() {
    return formatData(this._dataApi);
  }
}
