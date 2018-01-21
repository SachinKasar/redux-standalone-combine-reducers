import {createStore, combineReducers} from "redux";
 
const initialVisitorState = {visitorName:"XYZ"};
const initialDiscountState = {discount:"10000"};


const visitorReducer = (state=initialVisitorState, action) => {
	 switch (action.type) {
		case 'UPDATE_NAME':
             state = {
                ...state,
                visitorName:action.value,
            }
            break;
	}
	return state;
};


const discountReducer = (state=initialDiscountState, action) => {
	 switch (action.type) {
		 
		case 'PRICE_ADD':
            state = {
                ...state,
                discount: Number(state.discount) + Number(action.value),
            }
			break;
             
        case 'PRICE_DISCOUNT':
            state = {
                ...state,
                discount: Number(state.discount) - Number(action.value),
            }
            break;
	}
	return state;
};


const store = createStore(combineReducers({visitorReducer,discountReducer}));

store.subscribe(() => {
	console.log("State in store  - ", store.getState());
});


store.dispatch({
	type: "INITIAL_VISITOR_STATE"
});

store.dispatch({
	type: "UPDATE_NAME",
	value:"Splendor"
});

store.dispatch({
	type: "PRICE_ADD",
	value:5000
});

store.dispatch({
	type: "PRICE_DISCOUNT",
	value:7000
});

 