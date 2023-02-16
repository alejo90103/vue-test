/*
 * Project: test
 * Author: Alejandro Herrera (alejo901003@hotmail.com)
 * File Create: Thursday, 16th February 2023 6:59:30 pm
 * Last Modified: Thursday, 16th February 2023 6:59:30 
 */

export const apiDomain = 'https://vuetest.codeals.es/back/public/';

// posts
export const posts = apiDomain + 'api/posts';
export const rating = apiDomain + 'api/rating';

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers;
}
