import axios from 'axios';
import { GET_ITEMS,ADD_ITEM,DELETE_ITEM ,ITEMS_LOADDING} from './types';

export const getItems = () => dispatch => {
  dispatch(setItemsloadding());
  axios.get('api/items').then(res => dispatch({
      type:GET_ITEMS,
      payload:res.data
  }))
};
export const deleteItem = id => dispatch => {
    axios.delete(`api/items/${id}`).then(res => dispatch({
        type:DELETE_ITEM,
        payload:id
    }))
};
export const addItem = item => dispatch => {
    axios.post('api/items',item).then(res => dispatch({
        type:ADD_ITEM,
        payload:res.data
    }))
};
export const setItemsloadding = () => {
    return {
        type: ITEMS_LOADDING,
    };
};