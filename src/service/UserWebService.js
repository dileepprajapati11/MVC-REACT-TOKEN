import axios from "axios";

class UserWebService {
  postAPICall(url, data) {
    var result = axios.post(url, data);
    return result;
  }
  getAPICall(url) {
    var result = axios.get(url);
    return result;
  }
  deleteAPICall(url,id) {
    var result = axios.delete(url,id);
    return result;
  }

  
  // static async deleteAPICall(url) {
  //   try {
  //     const response = await axios.delete(url);
  //     return response.data; // Ensure to return response.data to handle the API response
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //     throw error; // Throw error to handle it in the calling function
  //   }
  // }

}
export default new UserWebService();
