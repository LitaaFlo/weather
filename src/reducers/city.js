import * as types from '../constants/ActionTypes';
const initalState = {
  cityes : [],
};
export default function city(state = initalState, action) {
  switch (action.type) {
    case types.ADD_CITY:
      return {...state, loading: true, name:action.data.name, icon:action.data.weather[0].icon, description:action.data.weather[0].description, temp:(parseFloat(action.data.main.temp) - 237.15).toFixed(2)  }
    case types.ADD_STAT:
      return {...state, data:action.data.list}
    case types.ADD_NEW_CITY:
      let f = state.cityes.filter(item => item.name === action.city)
      if (f.length === 0) {
        return {...state, cityes: state.cityes.concat({name: action.city, temp: action.temp})}
      } else {
        return {...state}
      }
    case types.REMOVE_CITY:
      return {...state,
        cityes: state.cityes.filter(item =>item.name !== action.id)
      }
      case types.SAVE_LOCAL:{
      return {...state }
      }
    case types.INIT_STATE:
      if (action.local !== null) {
      return {...state, cityes: action.local}
      } else {
        return {...state, cityes: []}
      }
    default: return state;
  }
}

