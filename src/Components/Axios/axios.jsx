import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;
// https://api.themoviedb.org/3//trending/all/week?api_key=07a8b44f156720b969e2b7b20b65b01e&language=en-US



