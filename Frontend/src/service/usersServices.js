import axios from "axios";
const getAllUsersData = async () => {
  console.log("bonjour");
  let response = await axios.get("http://localhost:3000/get_all_users");
  return response.data;
};

export default getAllUsersData;
