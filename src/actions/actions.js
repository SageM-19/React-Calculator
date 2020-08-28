export const ADD_TEXT = "ADD_TEXT";
export const DELETE_TEXT = "DELETE_TEXT";
export const CLEAR_TEXT = "CLEAR_TEXT";
export const CALCULATE = "CALCULATE"; 

/*The Action that adds input*/
export const addText = (input) => {
    return{
        type: ADD_TEXT,
        input
    };
}

/*The Action that deletes input*/

export const deleteText = () => {
    return{
        type: DELETE_TEXT
    };
}

/*The Action that deletes... completely, the input*/

export const clearText = (input) => {
    return{
        type: CLEAR_TEXT
    };
}

/*The action that calculates the input*/

export const calculate = () => {
    return {
        type: CALCULATE
    };
}




export default "";
