import axios from "axios"


export async function getUserIdService(data) {
  const response = await axios.get('http://localhost:3000/getUserId', data);//todo. id is not created yet.||| add data?
  return response.data;
}
export async function getAllUsersService() {
  const response = await axios.get('http://localhost:3000/getUsers');
  return response.data;
}

export async function deleteAllUsersService() {
  const response = await axios.get('http://localhost:3000/deleteUsers');
  return response.data;
}

export async function createUserService(data) {
  const response = await axios.post(`http://localhost:3000/user/createUser`,  data);
  return response.data;
}

export default {
  async getUser() {
    let res = await axios.get("http://localhost:3000/user");
    return res.data;
  },
  
}