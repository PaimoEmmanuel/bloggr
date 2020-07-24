export default (state = {}, action) => {
    switch (action.type) {
        case "SIGNIN":
            
            return {
                uid: action.uid
            }
    
        case "SIGNOUT":
            return {}
        default:
            return state
    }
}