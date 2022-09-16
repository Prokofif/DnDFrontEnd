import axios from "axios"


export async function getUserByNameService(id) {//cannot pass param
  const response = await axios.get(`http://localhost:3000/getUserByName/${id}`);
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
  const response = await axios.post(`http://localhost:3000/createUser`, data);
  console.log('response.data=============')
  console.log(response.data)
  return response.data;
}

export async function updateUserService(data) {
  const response = await axios.put("http://localhost:3000/updateUser", data);
  return response.data;
}

// export default {
//   async getUser() {
//     let res = await axios.get("http://localhost:3000/user");
//     return res.data;
//   },
// }