import fetch from 'isomorphic-fetch';
import { Promise } from 'es6-promise';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function getResponseJson(response) {
  return response.json();
}

export function get(url) {
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  })
    .then((response) => checkStatus(response))
    .then((json) => getResponseJson(json))
    .then((data) => {
      return data;
    },
	  (data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}
	
export function post(filterArray) {	
    return fetch(filterArray, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
		})
	})
	.then(response => { /* ... */ })
}