import {SERVER_BASE_URL} from '../constants';

const request = (options) => {
  const headers = new Headers( {
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin' : 'cors_url',
        'Content-Type': 'application/json',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
   .then(response =>
       response.json().then(json => {
           if(!response.ok) {
               return Promise.reject(json);
           }
           return json;
       })
   );

};

export function saveParty(partySaveRequest) {
    return request({
      url : SERVER_BASE_URL+"/saveParty",
      method : "POST",
      bodty : JSON.stringify(partySaveRequest)
    });
}
