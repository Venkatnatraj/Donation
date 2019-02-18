const initialState = {
    total:0,
    remain:1000

}

const Reducer = (state = initialState, action)=>{
    switch(action.type){
        case "remain":
            return{
                ...state,
                remain:  state.total - state.remain
            }
    }
    return state
}

export default Reducer