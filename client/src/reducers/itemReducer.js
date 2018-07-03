import { GET_ITEMS, ADD_ITEM, DELETE_ITEM , ITEMS_LOADDING} from '../actions/types';

const initialState = {
    items: [],
    loadding:false
};

export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
        return{
            ...state,
            items:action.payload,
            loadding:false
        };
        case DELETE_ITEM:
        return{
            ...state,
            items:state.items.filter(item => item._id !== action.payload)
        };
        case ADD_ITEM:
        return{
            ...state,
            items:[action.payload,...state.items]
        };
        case ITEMS_LOADDING:
        return{
            ...state,
            loadding:true
        };
        default:
        return state;
    }
}