import React, { Component } from "react";

class MyApp extends Component {
    state = {
        txt: "",
    };
    render() {
        return (
            <div id="app">
                <div>
                    <div className="top">
                        <input
                            type="text"
                            value={this.state.txt}
                            onChange={(e) => this.setState({ txt: e.target.value })}
                        />
                    </div>
                    <div className="bottom">
            <span className="txt">
              {this.state.txt.split("").reverse().join("")}
            </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyApp;
