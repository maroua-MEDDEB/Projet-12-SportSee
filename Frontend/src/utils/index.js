/**
 * Formats  initial date to good user format
 *
 * @param   {Object}  obj
 *
 * @return  {{activity: string, value: number}}    results
 */
export function formatData(obj) {
  // console.log("obj==> ", obj);
  const results = [];
  obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = translateToFr(obj.kind[key + 1]);

      nbrKind.kind = frenchDatas;
    }
    results.push({
      activity: nbrKind.kind,
      value: nbrKind.value,
    });
  });
  // console.log('Results: ', results);
  return results;
}

/**
 * Capitalize and translate to French
 *
 * @param   {string}  str
 *
 * @return  {string}
 */
export function translateToFr(str) {
  var performances = {
    energy: capitalizesFirstLetter("energie"),
    strength: capitalizesFirstLetter("force"),
    speed: capitalizesFirstLetter("vitesse"),
    intensity: capitalizesFirstLetter("intensité"),
    cardio: capitalizesFirstLetter("cardio"),
    endurance: capitalizesFirstLetter("endurance"),

    default: "unknown",
  };
  return performances[str] || performances["default"];
}

/**
 * Capitalize First letter
 *
 * @param   {string}  str
 *
 * @return  {string}
 */
export function capitalizesFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/**
 * Format an integer with the french dot separator grouping digits by 3.
 * @param {number} value
 * @returns {string}
 */
export function toFrenchIntegerFormat(value) {
  value = value.toString();

  if (value.length < 4) {
    return value;
  }

  return `${toFrenchIntegerFormat(value.slice(0, -3))}.${value.slice(-3)}`;
}
