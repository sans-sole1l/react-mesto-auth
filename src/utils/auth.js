export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => {
    if (res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}; 

export const authorize = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => {
    if (res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}; 

export const getUserData = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  .then((res) => {
    if (res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}; 
