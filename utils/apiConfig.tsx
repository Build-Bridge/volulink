import axios from "axios";

const getToken = (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  };

const apiConfig = axios.create({
    baseURL: "" , //define url here
    headers: {
        "Authorization": `Bearer ${getToken()}`
    }
})

export default apiConfig;