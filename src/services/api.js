import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export async function authenticate(login, password) {
  let resp = await axios.post(apiUrl + "/api/karaoke_list/auth", {
    login: login,
    password: password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return resp.data
}

export async function verifyJwtToken(jwtToken, logoutCallback) {
  try {
    let resp = await axios.post(apiUrl + "/api/karaoke_list/verify", jwtToken, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return true
  }
  catch {
    logoutCallback();
  }

}

export async function getMusics() {
  let resp = await axios.get(apiUrl + "/api/karaoke_list/musics")
  return resp.data
}

export async function createMusic(data, jwtToken, logoutCallback) {
  if (!verifyJwtToken(jwtToken, logoutCallback)) {
    return false
  }
  let resp = await axios.post(apiUrl + "/api/karaoke_list/musics", {
    jwt_token: jwtToken,
    data: data
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return resp.data
}

export async function createBatchMusics(datas, jwtToken, logoutCallback) {
  if (!verifyJwtToken(jwtToken, logoutCallback)) {
    return false
  }
  let resp = await axios.post(apiUrl + "/api/karaoke_list/musics", {
    jwt_token: jwtToken,
    datas: datas
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return resp.data
}