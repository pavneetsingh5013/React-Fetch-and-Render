const initialState={profiles:[
    {id:0,
    email:"placeholder@gmail.com",
    fname:"placeholder",
    lname:"placeholder",
    avatar:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    
]}
export const addprofReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADDPROFILE":
            return{
                    ...state,
                    profiles:[...state.profiles,action.payload]
            };
        default:
            return state;
    }
}