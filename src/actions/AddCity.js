var fetch = typeof window !== 'undefined' ? window.fetch : require('whatwg-fetch');

export function addCity(id, coord_1, coord_2){
  // const promise = fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fa7f9dea641b5a00f26a962a61a26669');
  // api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fab3842928c884a79e3140a0a92570b0
  return dispatch => {
      // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${id}&APPID=fab3842928c884a79e3140a0a92570b0`)
      if (id === null) {
          fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coord_1}&lon=${coord_2}&APPID=fa7f9dea641b5a00f26a962a61a26669`)
              .then(function(response) {
                  if (response.status === 200){
                      // console.log(response.json())
                      response.json().then( data =>  dispatch(SetCity(data))).then(() => dispatch(HistoryWeather(null, coord_1, coord_2)))
                      // return response
                  }

                  else {
                      alert('Ошибка в запросе. попробуйте ещё раз')
                  }
              })
      } else {
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${id}&APPID=fa7f9dea641b5a00f26a962a61a26669`)
              .then(function (response) {
                  if (response.status === 200) {
                      // console.log(response.json())
                      response.json().then(data => dispatch(SetCity(data))).then(() => dispatch(HistoryWeather(id)))

                      // return response
                  }

                  else {
                      alert('Ошибка в запросе. попробуйте ещё раз')
                  }
              })
      }
          // .then( response =>  dispatch(SetCity(response)))
      }
    // return dispatch => {
    //     //request 1
    //     var myHeaders = new Headers();
    //     var myInit = { method: 'GET',
    //         headers: myHeaders,
    //         mode: 'cors',
    //         cache: 'default' };
    //     return new Promise((resolve, reject) => {
    //         var originalThen = Promise.prototype.then;
    //         Promise.resolve(fetch(`https://private-b57787-litaaflo.apiary-mock.com/users`, myInit))
    //             .then((response) => {
    //                 if (response.status === 200) {
    //                     // console.log(response.json())
    //                     console.log(response.data);
    //                     response.json().then(function(data) {
    //                         console.log(data)
    //                     })
    //                     resolve(response.data);
    //                     // return response
    //                 }
    //             }).catch((err) => {
    //             reject(err);
    //         });
    //     });
        // request 2
        // return new Promise((resolve, reject) => {
        //     let newUser = {
        //         "id": "5",
        //         "name": "User3",
        //         "password":"222222",
        //         "role": "user"
        //     }
        //     Promise.resolve(fetch(`https://private-b57787-litaaflo.apiary-mock.com/questions`, {method: "POST", body: newUser}))
        //         .then((response) => {
        //             if (response.status === 200) {
        //                 // console.log(response.json())
        //                 console.log(response.data);
        //                 response.json().then(function(data) {
        //                     console.log(data)
        //                 })
        //                 resolve(response.data);
        //                 // return response
        //             }
        //         }).catch((err) => {
        //         reject(err);
        //     });
        // });
    // }
}
export function HistoryWeather(id, coord_1, coord_2){
    return dispatch => {
            id === null ? fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coord_1}&lon=${coord_2}&APPID=fa7f9dea641b5a00f26a962a61a26669`)
                .then(function(response) {
                    if (response.status === 200){
                        // console.log(response.json())
                        response.json().then(data => dispatch(SetStat(data)))
                        // response.json().then( data =>  dispatch(SetCity(data)))
                        // return response
                    }

                    else {
                        alert('Ошибка в запросе. попробуйте ещё раз')
                    }
                })
                : fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${id}&APPID=fa7f9dea641b5a00f26a962a61a26669`)
                    .then(function(response) {
                    if (response.status === 200){
                        // console.log(response.json())
                        response.json().then(data => dispatch(SetStat(data)))
                        // response.json().then( data =>  dispatch(SetCity(data)))
                        // return response
                    }

                    else {
                        alert('Ошибка в запросе. попробуйте ещё раз')
                    }
                })
    }
}
export function SetCity(data){
  return{
    type:'ADD_CITY',
    data: data
  }
}
export function SetStat(data){
  return{
    type:'ADD_STAT',
    data: data
  }
}
export function pickUp () {
  let mas = localStorage.getItem('local')
    return dispatch => {
      dispatch(initSave(JSON.parse(mas)))
    }
}
export function initSave(local){
  return{
    type:'INIT_STATE',
    local
  }
}
export function saveCity(city, temp) {
    console.log('city', city)
  return{
    type:'ADD_NEW_CITY',
    city,
    temp
  }
}
export function removeCity(id){
  return{
    type:'REMOVE_CITY',
    id
  }
}

export default function SaveLocal(subreddit) {
    console.log('subreddit', subreddit)
  return (dispatch) => {
      localStorage.setItem('local', JSON.stringify(subreddit.city.cityes))
  }
}
