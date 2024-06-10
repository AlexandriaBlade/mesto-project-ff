// api.js
import checkResponse from './utils/checkResponse';

const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-14',
  headers: {
    authorization: '3c382b25-38b5-4282-b2ef-ceb495a40170',
    'Content-Type': 'application/json'
  }
};

function getUserData() {
  return fetch(\`\${config.baseUrl}/users/me\`, {
    headers: config.headers
  })
  .then(checkResponse);
}

function getInitialCards() {
  return fetch(\`\${config.baseUrl}/cards\`, {
    headers: config.headers
  })
  .then(checkResponse);
}

function patchUserInfo(editProfileName, editProfileDescription) {
  return fetch(\`\${config.baseUrl}/users/me\`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: editProfileName.value,
      about: editProfileDescription.value
    })
  })
  .then(checkResponse);
}

function postNewCard(formNewPlaceInputName, formNewPlaceInputLink) {
  return fetch(\`\${config.baseUrl}/cards\`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: formNewPlaceInputName.value,
      link: formNewPlaceInputLink.value
    })
  })
  .then(checkResponse);
}

function deleteCard(id) {
  return fetch(\`\${config.baseUrl}/cards/\${id}\`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse);
}

function likeCard(id) {
  return fetch(\`\${config.baseUrl}/cards/likes/\${id}\`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(checkResponse);
}

function deleteLike(id) {
  return fetch(\`\${config.baseUrl}/cards/likes/\${id}\`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(checkResponse);
}

function editAvatar(input) {
  return fetch(\`\${config.baseUrl}/users/me/avatar\`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: input.value
    })
  })
  .then(checkResponse);
}

export { getUserData, getInitialCards, patchUserInfo, postNewCard, deleteCard, likeCard, deleteLike, editAvatar };

