import axios from "axios";

export const UserApi = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error(`Error Occurred while fetching user data: ${error}`);
    return [];
  }
};
