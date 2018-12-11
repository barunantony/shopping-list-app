import { Action } from '@ngrx/store';

const initialState = {
    shoppingList: [
        {name: 'Apple', qty: 8},
        {name: 'Tomato', qty: 5}
    ] 
};

export function shoppingListReducer (state = initialState, action: Action) {
    console.log(state, action);
    if (action.type === 'sometype') {
       const newState =  {
           ...state,
           shoppingList: [...state.shoppingList, {name: 'test', qty: 9}]
        }; 
        console.log(newState);
        return newState;
    }
    return state;
}