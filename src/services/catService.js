import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const catService = {
  getCats,
  postVote
}

function getCats(){
  return axios.get(baseURL);
}

function postVote(catId){
  return axios.post(`${baseURL}vote`, {
    cat_id: catId
  });
}
