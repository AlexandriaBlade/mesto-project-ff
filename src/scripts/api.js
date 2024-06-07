const config = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: '3c382b25-38b5-4282-b2ef-ceb495a40170',
    'Content-Type': 'application/json'
  }
}

function getUserData () {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function getInitialCards () {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function patchUserInfo (editProfileName, editProfileDescription) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: editProfileName.value,
      about: editProfileDescription.value
    })
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function postNewCard (formNewPlaceInputName, formNewPlaceInputLink) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: formNewPlaceInputName.value,
      link: formNewPlaceInputLink.value
    })
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })}

  function deleteCard (id) {
  return fetch(`${config.baseUrl + '/cards/' + id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function likeCard (id) {
  return fetch(`${config.baseUrl + '/cards/likes/' + id}`, {
  method: 'PUT',
  headers: config.headers
})
.then((res) => {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
})
}

function deleteLike (id) {
  return fetch(`${config.baseUrl + '/cards/likes/' + id}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

function editAvatar (input) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: input.value
    })
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export {getUserData, getInitialCards, patchUserInfo, postNewCard, deleteCard, likeCard, deleteLike, editAvatar}