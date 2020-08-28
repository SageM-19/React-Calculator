import React, {Component} from 'react';
import './display.css';
import {connect} from 'react-redux';



//Component that simply shows the input and the solution. Could be rendered in the app instead but I want to focus on making reusable components. Will display zero if there is no input. 

class Display extends Component {


    render () {
        return (this.props.input === ""? <div> <h1 className="one">0</h1>
                    <h1 className="two"> </h1></div>: <div>
                <h1 className="one">{this.props.input}</h1>
                <h1 className="two">{this.props.solution}</h1>
            </div>

            

        );
    }

}
/*Get the necessary state.input and the function*/
const mapStateToProps = (state) => {
    return {
        input: state.input,
        solution: state.solution
    }
}



export default connect(mapStateToProps)(Display);
