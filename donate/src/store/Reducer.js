const initialState = {
    total:1000
}

const Reducer = (state = initialState, action)=>{
    switch(action.type){
        case "remain":
            return{
                ...state,
                total:  state.total - action.payload,
                
            }
    }
    return state
}

export default Reducer