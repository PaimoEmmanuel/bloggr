//Filter reducer
const filterReducer = (state = { searchText: '' }, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                searchText: action.text
            };

        default:
            return state;
    }
};
export default filterReducer