import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _-v5LEmgbNPvjVxX90-GLR97OGkWcoAbOt0Qjy7wBAE",
  },
});
