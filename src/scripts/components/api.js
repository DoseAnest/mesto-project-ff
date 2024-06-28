const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-11',
  headers: {
    authorization: 'eed23ad5-f826-4f84-8c2d-d969b17f26f1',
    'Content-Type': 'application/json'
  }
};

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('response was not ok');
  }
}

// update profile
function updateUSerProfileOnServer({name, about}) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: config.headers.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then((res) => {
      return handleResponse(res);
    }); 
};

function getUserInfoByServer() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
        authorization: config.headers.authorization
      },
  })
  .then((res) => {
    return handleResponse(res);
  });
};

// Вывести карточки на страницe
function getCardInfoByServer() {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: {
        authorization: config.headers.authorization
        },
  })
  .then((res) => {
    return handleResponse(res);
  })
};

//add card on server
function addUserCardOnServer({link, name}) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      link: link,
      name: name
    })
  })
  .then((res) => {
    return handleResponse(res);
  });
};

//remove card
function removeUserCardOnServer(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    return handleResponse(res);
  })
};

//add likes on server
function addUserlikesInfoOnServer(cardId) {
  return fetch(`${config.baseUrl}//cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
        authorization: config.headers.authorization,
        'Content-Type': 'application/json'
      }
  })
  .then((res) => {
    return handleResponse(res);
  });
};

//remove likes
function removeUserlikesOnServer(cardId) {
  return fetch(`${config.baseUrl}//cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    return handleResponse(res);
  });
};

function updateUserAvatarOnServer({avatar}) {
  return fetch(`${config.baseUrl}/users/me/avatar `, {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then((res) => {
    return handleResponse(res);
  });
}

export {
  addUserCardOnServer, 
  updateUSerProfileOnServer, 
  getUserInfoByServer, 
  getCardInfoByServer, 
  removeUserCardOnServer,
  addUserlikesInfoOnServer,
  removeUserlikesOnServer,
  updateUserAvatarOnServer
}