import axios from "axios";

const key = "663ec9e96ebd46148f137d305a740c7a";
const axiosCreate = axios.create({
  baseURL:"https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get(
  "/genres?key=" + "663ec9e96ebd46148f137d305a740c7a"
);
export default {
  getGenreList,
};
