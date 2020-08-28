import React, {Component} from 'react';
import Button from './button/button.js';
import Display from './display/display.js';
import Calculate from './calculate/calculate.js';
import './App.css';



//Main React app: Styled with bootstrap grid sysem

class App extends Component {
    //My App has no need of a constructor
    
    render () {
        //Map the numbers one to nine to the buttons to make the code look a little nicer
        const numpad = [{number: 1, id : "one"},
        {number: 2, id : "two"},
        {number: 3, id : "three"},
        {number: 4, id : "four"},
        {number: 5, id : "five"},
        {number: 6, id : "six"},
        {number: 7, id : "seven"},
        {number: 8, id : "eight"},
        {number: 9, id : "nine"},].map( buttons => <div key={buttons["id"]} className="col-4 buttonHolder"> <Button  num={buttons["number"]} /></div>);
    
        const signs = ["(", ")", "+", "-", "*", "/"].map( sign => <div key={sign} className="col-6 buttonHolder"> <Button  num={sign} /></div>);
                                                                                        
        return (
            <div className="container App">

                                           
                <div className="row">
                    <div className="col-12">
                        {/*Shows the input and solution*/}
                        <Display />

                    </div>

                </div>
                
                <div className="space"></div>

                <div className=" container-fluid numpadHolder">

                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                
                                
                                {/*The clear all button*/}
                                <div className= "col-10 buttonHolder"> <Button num="AC"/></div>
                                
                                <div className="col"></div>
                            </div>
                        </div>
                        
                        

                        <div className="col-4">
                            <div className="row"> 
                                
                                {/*The delete one button*/}
                                <div className="col-12 buttonHolder"> <Button num="Del"/></div>

                                </div>
                        </div>
                        
                        <div className="col-8 paddingRight">
                            <div className="row ">
                                
                                {/*The mapped numpad*/}
                                {numpad}
                                
                                
                                {/*These could'nt really fit into the numpad so here they are*/}
                                <div className="col-8 buttonHolder"> <Button num="0"/></div>

                                <div className="col-4 buttonHolder"> <Button num="."/></div>

                            </div>
                        </div>
                        
                        



                        {/* The equation signs in all it's mapped glory*/}
                        <div className="col-4">
                            <div className="row">
                                {signs}

                                <div className="col-12 buttonHolder "> <Calculate /></div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        );
    }

};


export default App;
