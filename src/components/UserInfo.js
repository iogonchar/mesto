export default class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._userNameSelector = userNameSelector;
    this._userInfoSelector = userInfoSelector;

    // this._formData = formData;

    this._inputUserName = document.querySelector(this._userNameSelector);
    this._inputUserInfo = document.querySelector(this._userInfoSelector);
  }

  getUserInfo() {
    // получение имеющихся данных пользователя
    this._userData = {
      author: this._inputUserName.textContent,
      info: this._inputUserInfo.textContent
    };

    return this._userData;
  }

  setUserInfo(formData) {
    // добавление новых данных о пользователе
    this._inputUserName.textContent = formData.author;
    this._inputUserInfo.textContent = formData.about;
  }
}
