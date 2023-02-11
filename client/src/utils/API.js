import axios from "axios";

export default {
  limit: function () {
    return axios.get("api/calculator/save");
  },
  save: function (data) {
    return axios.post("api/calculator/save", data);
  },
};
