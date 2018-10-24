import {SERVER_BASE_URL} from '../constants/constants.js';

const request = (options) => {
  const headers = new Headers( {
    //'Access-Control-Allow-Credentials' : 'true',
    //'Access-Control-Allow-Origin' : 'cors_url',
        'Content-Type': 'application/json',
         'Accept': 'application/json',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    console.log(options);
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

  const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: JSON.stringify(partySaveRequest)
    }

  debugger;

  fetch(SERVER_BASE_URL+"/saveParty", options).catch(err => {
    console.error('Request failed', err)
  }).then(response =>
      response.json().then(json => {
        console.log(json);
          if(!response.ok) {
              return Promise.reject(json);
          }
          return json;
      })
  );

}

//  event.preventDefault();
/*
console.log(SERVER_BASE_URL);
return fetch(SERVER_BASE_URL+"/saveParty", {
  method: 'POST',
  headers: {
    'Access-Control-Allow-Credentials' : 'true',
    //'Access-Control-Allow-Origin' : 'cors_url',
    'Accept': 'application/json',
    //'Content-Type': 'application/json',
    'Content-Type':'text/plain',
  },
  body: JSON.stringify(partySaveRequest)
}).then(response =>
    response.json().then(json => {
        if(!response.ok) {
            return Promise.reject(json);
        }
        return json;
    })
);

*/
  //  return request({
  //    url : SERVER_BASE_URL+"/saveParty",
  //    method : 'POST',
  //    body : JSON.stringify(partySaveRequest)
  //  });
