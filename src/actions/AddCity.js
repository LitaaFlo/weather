var fetch = typeof window !== 'undefined' ? window.fetch : require('whatwg-fetch');

export function addCity(id, coord_1, coord_2){
  return dispatch => {
      if (id === null) {
          fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coord_1}&lon=${coord_2}&units=metric&APPID=fa7f9dea641b5a00f26a962a61a26669`)
              .then(function(response) {
                  if (response.status === 200){
                      response.json().then( data =>  dispatch(SetCity(data))).then(() => dispatch(HistoryWeather(null, coord_1, coord_2)))
                  } else {
                      alert('Ошибка в запросе. попробуйте ещё раз')
                  }
              })
      } else {
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${id}&units=metric&APPID=fa7f9dea641b5a00f26a962a61a26669`)
              .then(function (response) {
                  if (response.status === 200) {
                      response.json().then(data => dispatch(SetCity(data))).then(() => dispatch(HistoryWeather(id)))
                  } else {
                      alert('Ошибка в запросе. попробуйте ещё раз')
                  }
              })
      }
  }

}
export function HistoryWeather(id, coord_1, coord_2){
    return dispatch => {
            id === null ? fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coord_1}&lon=${coord_2}&units=metric&APPID=fa7f9dea641b5a00f26a962a61a26669`)
                .then(function(response) {
                    if (response.status === 200){
                        response.json().then(data => dispatch(SetStat(data)))
                    } else {
                        alert('Ошибка в запросе. попробуйте ещё раз')
                    }
                })
                : fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${id}&units=metric&APPID=fa7f9dea641b5a00f26a962a61a26669`)
                    .then(function(response) {
                    if (response.status === 200){
                        response.json().then(data => dispatch(SetStat(data)))
                    } else {
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
  return (dispatch) => {
      localStorage.setItem('local', JSON.stringify(subreddit.city.cityes))
  }
}
