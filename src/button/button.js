import React, {Component} from 'react';
import './button.css';
import {connect} from 'react-redux';
import {addText, deleteText, clearText} from '../actions/actions.js';


//The Component that controls everything about the input, thus uses all other cases 

class Button extends Component {
    constructor(props) {
        super(props);


        this.inputValue = this.inputValue.bind(this);
        this.deleteValue = this.deleteValue.bind(this);
        this.clearValue = this.clearValue.bind(this);

    }


    /*The function onClick that will save the users input into the input state in redux*/
    inputValue = () => {
        this.props.addInput(this.props.num);
    }
    
    deleteValue = () => {
        this.props.deleteInput();
    }
    
    clearValue = () => {
        this.props.clearInput();
    }


    render () {
        
        //This is how the Component chooses which button is rendered based on the the props.num the App passes down
        const normalButton = <button type="button" className=" btn numpad" onClick={this.inputValue} >{this.props.num}</button>

        let deleteButton = <button type="button" className=" btn danger numpad" onClick={this.deleteValue} >{this.props.num}</button>
            
        let clearButton = <button type="button" className="btn graveDanger numpad" onClick={this.clearValue}>{this.props.num}</button>
            
        
        return (this.props.num !== "Del" && this.props.num  !== "AC" && this.props.num  !== "History"? normalButton : this.props.num === "Del" ? deleteButton : clearButton);
    }

};


/*Get the necessary state.input and the function*/
const mapStateToProps = (state) => {
    return {
        input: state.input,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addInput: (input) => {dispatch(addText(input))},
        deleteInput: () => {dispatch(deleteText())},
        clearInput: () => {dispatch(clearText())}
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);