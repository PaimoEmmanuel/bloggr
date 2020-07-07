import { createStore } from 'redux';
//Action generators
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = (({ setCount } = {}) => ({
    type: 'SET',
    setCount
}))

const countReducer = (state = { count: 0 }, action) => {
    //action.type === 'INCREMENT' ? {count: state.count++} : state;
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setCount
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}
const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

// unsubscribe();

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ setCount: 200}));