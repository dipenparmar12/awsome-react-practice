const BASE_URL = 'http://localhost:8000/'

const Client = {
  get: (url, opt) =>
    fetch(BASE_URL + url, Object.assign({ method: 'get' }, opt)).then((res) =>
      res.json(),
    ),
  post: (url, data) =>
    fetch(BASE_URL + url, {
      method: 'POST',
      // body: data,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json()),
}

const Api = {
  users: {
    create: (...args) => Client.post('users', ...args),
    get: (qry, ...args) => Client.get(`users?${qry}`, ...args),
  },
}

export default Api

/* ------------------------------------

------ Example ---------
Api.users
  .get('_sort=id&_order=desc')
  .then(res => {
    // console.log("FormExample.vue::142 res", res);
  });



------ GET ---------
fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => ...)

------ POST ---------
 fetch('/data.json', {
  method: 'post',
  body: new FormData(form), // post body
  body: JSON.stringify(...), // or json body
  headers: {
    "Content-Type": "application/json",
    "Accept": 'application/json'
  },
})

------ Response ---------
fetch('/data.json')
.then(res => {
  res.text()       // response body (=> Promise)
  res.json()       // parse via JSON (=> Promise)
  res.status       //=> 200
  res.statusText   //=> 'OK'
  res.redirected   //=> false
  res.ok           //=> true
  res.url          //=> 'http://site.com/data.json'
  res.type         //=> 'basic'
                   //   ('cors' 'default' 'error'
                   //    'opaque' 'opaqueredirect')

  res.headers.get('Content-Type')
})


function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}
 ------------------------------------ */
