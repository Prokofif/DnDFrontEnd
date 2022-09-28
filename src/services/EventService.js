import axios from "axios"

// const backend = 'https://dnd-backendd.herokuapp.com'
const backend = ' http://localhost:3000'

export async function getUserByNameService(id) {//cannot pass param
  const response = await axios.get(`${backend}/getUserByName/${id}`);
  return response.data;
}
export async function getAllUsersService() {
  const response = await axios.get(`${backend}/getUsers`);
  return response.data;
}

export async function deleteAllUsersService() {
  const response = await axios.get(`${backend}/deleteUsers`);
  return response.data;
}

export async function createUserService(data) {
  const response = await axios.post(`${backend}/createUser`, data);
  console.log('response.data=============')
  console.log(response.data)
  return response.data;
}

export async function updateUserService(data) {
  const response = await axios.put(`${backend}/updateUser`, data);
  return response.data;
}

// export default {
//   async getUser() {
//     let res = await axios.get("http://localhost:3000/user");
//     return res.data;
//   },
// }