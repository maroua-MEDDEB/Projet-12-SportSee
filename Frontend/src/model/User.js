import calorieIcon from "../assets/images/icons_cards/icon-calorie.png";
import carbohydrateIcon from "../assets/images/icons_cards/icon-carbohydrate.png";
import proteinIcon from "../assets/images/icons_cards/icon-protein.png";
import lipidIcon from "../assets/images/icons_cards/icon-lipid.png";
// @ts-nocheck

/**Constructor Pattern - User
 * @constructor
 * @param {string} userId
 * @param {object} data  contains all user data
 * @param {object} dataApi contains data from Api
 */
export class User {
  constructor(userId, data, dataApi) {
    this._userId = userId;
    this._data = data;
    this._dataApi = dataApi;
  }
  /**
   * Gets FirstName from initial data
   *
   * @return  {string}  FirstName
   */
  get _firstName() {
    let firstName = "unknown user";
    this._data?.userMainData.forEach((user) => {
      // console.log('condition userId', user.userId);
      if (user.userId === parseInt(this._userId)) {
        firstName = user.userInfos.firstName;
        //console.log('condition userId', user.todayScore);
      }
    });

    return firstName;
  }

  /**
   * Gets FirstName from initial data
   *
   * @return  {string}  FirstName
   */
  get _toDayScore() {
    let score = 0;
    this._data.userMainData.forEach((user) => {
      if (user.userId === parseInt(this._userId)) {
        score = user.todayScore;
      }
    });

    return score;
  }

  /**
   * Formats User keyData from initial data
   *
   * @return  {{nutriments: Array, values: Array}   { nutriments, values }
   */
  get _keyData() {
    const nutriments = [
      { icon_type: calorieIcon, text_type: "Calories" },
      { icon_type: proteinIcon, text_type: "Proteines" },
      { icon_type: carbohydrateIcon, text_type: "Glucides" },
      { icon_type: lipidIcon, text_type: "Lipides" },
    ];

    let values = new Array(5);
    const userData = this._data?.forEach((user) => {
      if (user.userId === parseInt(this._userId)) {
        // console.log(user.keyData);
        values = Object.values(user.keyData);
      }
    });

    return { nutriments, values };
  }

  /**
   * Formats User keyData from Api
   *
   * @return  {{nutriments: Array, values: Array}   { nutriments, values }
   */
  get _keyDataApi() {
    const nutrimentsApi = ["Calories", "Protéines", "Glucides", "Lipides"];
    let valuesApi = new Array(5);

    valuesApi = Object.values(this._dataApi);

    return { nutrimentsApi, valuesApi };
  }
}
