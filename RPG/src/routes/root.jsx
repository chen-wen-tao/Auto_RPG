import React, { Component } from "react";
import "../style/root.css";

export default class Root extends Component{
    render(){
        return (
            <>
            
              <div class="center">
                <center><h1>Auto RPG</h1></center>
                <div>
                  <a href={`/login`}><button>Start</button></a>
                </div>
              </div>
            </>
          );
    }
}