import {ADD_TEXT, DELETE_TEXT, CLEAR_TEXT, CALCULATE} from '../actions/actions.js';
import {evaluate} from 'mathjs'


//State of the Calculator at all times
const initState = {
    input: "",
    solution: ""
}


// Main and only reducer for the calculator
const calcReducer = (state = initState, action) => {
    switch (action.type){
            
            //Case for user input through buttons. Also manages the amount of input a user is allowed to have in the calculator
        case ADD_TEXT:
            if (state.input.length >= 19) {
                return {...state,input: "Exceeded limits", solution: "Please Clear"};
            }

            else if(state.solution !== ""){
                return {...state,input:[action.input].join(""), solution: ""};
            }

            else {
                return {...state,input:[...state.input, action.input].join("")};
            }



            //Case for user input being deleted through buttons. Does not work if limits are exceeded.
        case DELETE_TEXT:

            if(state.input !== "Exceeded limits" && state.solution === "") {
                let newInput = state.input.substring(0, state.input.length-1); 
                return {...state, input: newInput};
            }

            else {
                return state;
            }

            //Case for user to clear input id necessary, Always works (I believe)
        case CLEAR_TEXT:
            return {...state, input: "", solution: ""};

            
            //Case for calculating the users input. Throws an error if something is off.
        case CALCULATE:
            try {
                evaluate(state.input);
            }
            catch(err) {
                return {...state, solution: "Error"}
                
            }
            return {...state, solution: evaluate(state.input)}


            // The "If nothing happens or something goes wrong" scenario

        default:
            return state;



    }
}





export default calcReducer;