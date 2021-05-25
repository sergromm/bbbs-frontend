/* eslint-disable no-underscore-dangle */
const axios = require("axios");
// eslint-disable-next-line import/no-extraneous-dependencies
const MockAdapter = require("axios-mock-adapter");
const responses = require("./mockResponses");

const mock = new MockAdapter(axios);

const URL = "http://127.0.0.1:8000/api/v1";
class Api {
  constructor(options) {
    this._url = options;
  }

  // проверка ответа с сервера

  // eslint-disable-next-line class-methods-use-this
  _checkResponse(res) {
    // Костыль для проверки что токен был отправлен
    // console.log(res.config.headers.Authorization);
    if (!res) throw new Error("Не удалось получить данный с сервера");
    return res.data;
  }

  // Запрос авторизации. Отправляем имя и пароль. Получаем в ответ 2 токена.
  // access для доступа к авторизации refresh для обновления access токена.

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

  // Запрос обновления токена. Отправляем refresh токен, получаем новый access токен
  // В мокапе придет старый токен, это ок.

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

  // Запрос списка городов. Аргументы не нужны.

  getCities() {
    mock.onGet(`${URL}/cities/`).reply(200, responses.cities);
    return axios.get(`${this._url}/cities/`).then(this._checkResponse);
  }

  // Запрос информации о пользователе. Аргументы не нужын.

  getProfile() {
    mock.onGet(`${URL}/profile/`).reply(200, responses.profile);
    return axios.get(`${this._url}/profile/`).then(this._checkResponse);
  }

  // (Функционал админа) Запрос на добавление нового пользователя. Отправляем имя и город.
  // Получаем профиль принятого пользователя.

  addProfile(name, city) {
    mock
      .onPut(`${URL}/profile/`, { params: { name, city } })
      .reply(200, responses.acceptedProfile);
    return axios
      .put(`${this._url}/profile/`, { params: { name, city } })
      .then(this._checkResponse);
  }

  // Запрос редактирования профиля. Отправляем новые: имя, город и токен пользователя.
  // Получаем обновлённый профиль пользователя.

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

  // Запрос данных для главной страницы. Передаём id города.
  // Получаем главную страницу.

  getMainPage(cityId) {
    mock
      .onGet(`${URL}/main/`, { params: { cityId } })
      .reply(200, responses.mainPage);
    return axios
      .get(`${this._url}/main/`, { params: { cityId } })
      .then(this._checkResponse);
  }

  // Запрос событий передаём id города из профиля пользователя
  // или спрашиваем из какого города пользователь(?) и отправляем id города

  getEvents(cityId, token) {
    mock
      .onGet(`${URL}/afisha/events/`, { params: { cityId } })
      .reply(200, responses.events);
    return axios
      .get(
        `${this._url}/afisha/events/`,
        {
          params: { cityId },
        },
        {
          headers: { Authorization: token },
        }
      )
      .then(this._checkResponse);
  }

  // Запись на событие. Отправляем id события и access token
  // получаем событие на которое записался пользователь

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
      {
        headers: { Authorization: token },
      }
    );
  }
}

const api = new Api(URL);

// testApi.authorize("admin", "admin").then(console.log);
// testApi.refreshToken(responses.tokens.refresh).then(console.log);
// api.getCities().then(console.log);
// testApi.getProfile().then(console.log);
// testApi.addProfile("Имя", "Город").then(console.log);
// testApi
//   .editProfile("Новое Имя", "Новый Город", responses.tokens.access)
//   .then(console.log);
// testApi.getMainPage(1).then(console.log);
// api.getEvents(1, responses.tokens.access).then(console.log);
// testApi
//   .bookEvent(1, responses.tokens.access)
//   .then((data) => console.log(data.data));

module.exports = api;
