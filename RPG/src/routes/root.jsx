import React, { Component } from "react";
import "../style/root.css";

export default class Root extends Component{
    render(){
        return (
            <>
            
              <div className="center">
                <center><h1>Auto RPG</h1></center>
                <div>
                  {/* Can not see button label text, maybe because I am using the light mode */}
                  <a href={`/login`}><button>Start</button></a>
                </div>
              </div>
            </>
          );
    }
}