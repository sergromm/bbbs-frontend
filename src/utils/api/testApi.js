/* eslint-disable no-underscore-dangle */
const axios = require("axios");
// eslint-disable-next-line import/no-extraneous-dependencies
const MockAdapter = require("axios-mock-adapter");
const responses = require("./mockResponses");

const mock = new MockAdapter(axios);

const URL = "http://127.0.0.1:8000/api/v1";
class TestApi {
  constructor(options) {
    this._url = options;
  }

  // eslint-disable-next-line class-methods-use-this
  _checkResponse(res) {
    // Костыль для проверки что токен был отправлен
    // console.log(res.config.headers.Authorization);
    if (!res) throw new Error("Не удалось получить данный с сервера");
    return res.data;
  }

  authorize(username, password) {
    mock
      .onPost(`${URL}/token/`, {
        params: { username, password },
      })
      .reply(200, responses.tokens);
    return axios
      .post(`${this._url}/token/`, { params: { username, password } })
      .then(this._checkResponse);
  }

  refreshToken(token) {
    mock
      .onPost(`${URL}/token/refresh/`, {
        params: { refresh: token },
      })
      .reply(200, responses.tokens.access);
    return axios
      .post(`${this._url}/token/refresh/`, { params: { refresh: token } })
      .then(this._checkResponse);
  }

  getCities() {
    mock.onGet(`${URL}/cities/`).reply(200, responses.cities);
    return axios.get(`${this._url}/cities/`).then(this._checkResponse);
  }

  getProfile() {
    mock.onGet(`${URL}/profile/`).reply(200, responses.profile);
    return axios.get(`${this._url}/profile/`).then(this._checkResponse);
  }

  addProfile(name, city) {
    mock
      .onPut(`${URL}/profile/`, { params: { name, city } })
      .reply(200, responses.acceptedProfile);
    return axios
      .put(`${this._url}/profile/`, { params: { name, city } })
      .then(this._checkResponse);
  }

  editProfile(name, city, token) {
    mock
      .onPatch(`${URL}/profile/`, {
        params: { name, city },
      })
      .reply(200, responses.editedProfile);
    return axios
      .patch(
        `${this._url}/profile/`,
        {
          params: { name, city },
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(this._checkResponse);
  }

  getMainPage(id) {
    mock
      .onGet(`${URL}/main/`, { params: { id } })
      .reply(200, responses.mainPage);
    return axios
      .get(`${this._url}/main/`, { params: { id } })
      .then(this._checkResponse);
  }

  getEvents(token) {
    mock.onGet(`${URL}/afisha/events/`).reply(200, responses.events);
    return axios
      .get(`${this._url}/afisha/events/`, {
        headers: { Authorization: token },
      })
      .then(this._checkResponse);
  }

  bookEvent(eventId, token) {
    mock
      .onPost(`${URL}/afisha/event-participants/`, {
        params: { event: eventId },
      })
      .reply(200, responses.bookEvent);
    return axios.post(
      `${this._url}/afisha/event-participants/`,
      {
        params: { event: eventId },
      },
      { headers: { Authorization: token } }
    );
  }
}

const testApi = new TestApi(URL);

// testApi.authorize("admin", "admin").then(console.log);
// testApi.refreshToken(responses.tokens.refresh).then(console.log);
// testApi.getCities().then(console.log);
// testApi.getProfile().then(console.log);
// testApi.addProfile("Имя", "Город").then(console.log);
// testApi
//   .editProfile("Новое Имя", "Новый Город", responses.tokens.access)
//   .then(console.log);
// testApi.getMainPage(1).then(console.log);
// testApi.getEvents(responses.tokens.access).then(console.log);
testApi
  .bookEvent(1, responses.tokens.access)
  .then((data) => console.log(data.data));

export default testApi;
