import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const kayit = (username, email, password) => {
  return axios.post(API_URL + "kayit", {
    username,
    email,
    password,
  });
};

const giris = (email, password) => {
  return axios
    .post(API_URL + "giris", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        global.localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const cikis = () => {
  global.localStorage.removeItem("user");
};

const authService = {
  kayit,
  giris,
  cikis,
};

export default authService;
