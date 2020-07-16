import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Card from './components/Card'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleLogo: true,
            cards: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },],

        }
        this.toggleLogo = this.toggleLogo.bind(this)

    }

    toggleLogo(event) {
        this.setState((prevState) => ({
            toggleLogo: !prevState.toggleLogo
        }))
    }

    render() {
        return (
            <div className="App">
                {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
                <header className="App-header">
                    <img src={logo}
                        className={this.state.toggleLogo ? 'static-logo' : 'static-logo animate__animated animate__jello'}
                        alt="logo"
                        // onClick={this.toggleLogo}
                        onMouseEnter={this.toggleLogo}
                        onMouseLeave={this.toggleLogo}
                    />


                    <h1 className="App-title">Vitmin Store</h1>
                </header>
                <div className="Grid">
                    {
                        this.state.cards.map((card) => (
                            <Card duration={150} key={card.id} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;
