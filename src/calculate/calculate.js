import React, {Component} from 'react';
import './calculate.css';
import {connect} from 'react-redux';
import {calculate} from '../actions/actions.js';


// The component that does all calculations saved in the input. Uses the CALCULATE case

class Calculate extends Component {
    constructor(props) {
        super(props);


        this.theAnswer = this.theAnswer.bind(this);


    }

    theAnswer = () => {
        this.props.solution();
    }

    render () {
        return (
            <div> <button onClick={this.theAnswer} className="Solution"> Ans</button> </div>
        )

    };

}
/*Get the necessary state.input and the function*/

const mapDispatchToProps = (dispatch) => {
    return {
        solution: () => {dispatch(calculate())}
    }
}

export default connect(null, mapDispatchToProps)(Calculate);