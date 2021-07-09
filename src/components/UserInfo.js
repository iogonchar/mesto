export default class UserInfo {
  constructor({ userNameSelector, userInfoSelector, userAvatarSelector }) {
    this._userNameSelector = userNameSelector;
    this._userInfoSelector = userInfoSelector;
    this._userAvatarSelector = userAvatarSelector;

    this._UserName = document.querySelector(this._userNameSelector);
    this._UserInfo = document.querySelector(this._userInfoSelector);
    this._userAvatar = document.querySelector(this._userAvatarSelector);
  }

  getUserInfo() {
    // получение имеющихся данных пользователя
    this._userData = {
      author: this._UserName.textContent,
      info: this._UserInfo.textContent
    };

    return this._userData;
  }

  setUserInfo(formData) {
    // добавление новых данных о пользователе
    this._UserName.textContent = formData.author;
    this._UserInfo.textContent = formData.about;
    this._userAvatar.src = formData.avatar;
  }

  setUserAvatar(avatarLink) {
    this._userAvatar.src = avatarLink;
  }
}
