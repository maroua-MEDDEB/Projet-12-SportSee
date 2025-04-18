import axios from "axios";
const data = "/mock.json";
/**
Retrieves all data using a mocked API endpoint.*
@return {Promise} A promise that resolves with the data response.
*/
export const getAllDataMocked = () => {
  return axios.get(data).then((response) => response.data);
};
/**
 
Returns an array of objects that match the given userId.*
@param {string} userId - The userId to search for.
@param {Array} data - The array of objects to search in.
@return {Array} - An array of objects that match the given userId.
*/
export const getDataByUserId = (userId) => {
  return getAllDataMocked().map((obj) => obj.userId === userId);
};
