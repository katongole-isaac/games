import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "53ca4dbd3c744ddf9ac641bc7c249d3e",
  },
});
