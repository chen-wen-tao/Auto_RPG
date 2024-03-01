import { Form } from "react-router-dom";
import "../style/login.css";
import React, { Component } from "react";

export default class LoginPage extends Component{



    render(){
        return (
            <>

                <div className="center">

                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>

                        <a href={`/create-character`}><button>Login</button></a>
                        <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                        </label>
                    </div>

                    <div className="container">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </div>
            </>
    
        );
    }
}