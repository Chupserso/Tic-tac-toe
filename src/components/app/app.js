import { Component } from "react";
import "./app.css";
import Header from "../header/header";
import Items from "../items/items";
import InfoText from "../info-text/info-text";

class App extends Component {
    constructor (props) {
        super(props);
        const charsArray = ["x", "o", "x", "o", "x", "o"];
        const move = charsArray[Math.floor(Math.random() * charsArray.length)];
        let text;
        switch (move) {
            case "x":
                text = "Ходят крестики";
                break;
            case "o":
                text = "Ходят нолики";
                break;
        }
        this.state = {
            chars: [
                {char: "", id: 1, className: "one"},
                {char: "", id: 2, className: "two"},
                {char: "", id: 3, className: "three"},
                {char: "", id: 4, className: "four"},
                {char: "", id: 5, className: "five"},
                {char: "", id: 6, className: "siv"},
                {char: "", id: 7, className: "seven"},
                {char: "", id: 8, className: "eight"},
                {char: "", id: 9, className: "nine"},
            ],
            move: move,
            text: text,
            lose: false
        }
    }
    moveFunc = (id, char) => {
        let text;
        let charSave = char
        switch (char) {
            case "x":
                char = "o";
                break;
            case "o":
                char = "x";
                break;
        }
        switch (char) {
            case "x":
                text = "Ходят крестики";
                break;
            case "o":
                text = "Ходят нолики";
                break;
        }
        let data = [];
        for (let i = 0; i < this.state.chars.length; i++) {
            if (char == document.querySelector("." + this.state.chars[i].className).innerHTML) {
                if (id == this.state.chars[i].id) {
                    data.push({char: charSave, id: i + 1, className: this.state.chars[i].className});
                } else {
                    data.push({char: this.state.chars[i].char, id: i + 1, className: this.state.chars[i].className});
                }
            } else if (char != document.querySelector("." + this.state.chars[i].className).innerHTML && char.length > 0) {
                if (id == this.state.chars[i].id) {
                    data.push({char: charSave, id: i + 1, className: this.state.chars[i].className});
                } else {
                    data.push({char: this.state.chars[i].char, id: i + 1, className: this.state.chars[i].className});
                }
            }
        }
        this.setState({
            move: char,
            text: text,
            chars: data
        })
    }
    winModal = (text) => {
        this.setState({text:text, lose: true});
    }
    render () {
        const chars = this.state.chars;
        if (chars[0].char == "x" && chars[1].char == "x" && chars[2].char == "x") {
            setTimeout(() => {
                this.winModal("Крестики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        } else if (chars[0].char == "o" && chars[1].char == "o" && chars[2].char == "o") {
            setTimeout(() => {
                this.winModal("Нолики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        }
        if (chars[0].char == "x" && chars[3].char == "x" && chars[6].char == "x") {
            setTimeout(() => {
                this.winModal("Крестики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        } else if (chars[0].char == "o" && chars[3].char == "o" && chars[6].char == "o") {
            setTimeout(() => {
                this.winModal("Нолики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        }
        if (chars[2].char == "x" && chars[5].char == "x" && chars[8].char == "x") {
            setTimeout(() => {
                this.winModal("Крестики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        } else if (chars[2].char == "o" && chars[5].char == "o" && chars[8].char == "o") {
            setTimeout(() => {
                this.winModal("Нолики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        }
        if (chars[1].char == "x" && chars[4].char == "x" && chars[7].char == "x") {
            setTimeout(() => {
                this.winModal("Крестики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        } else if (chars[1].char == "o" && chars[4].char == "o" && chars[7].char == "o") {
            setTimeout(() => {
                this.winModal("Нолики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        }
        if (chars[3].char == "x" && chars[4].char == "x" && chars[5].char == "x") {
            setTimeout(() => {
                this.winModal("Крестики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        } else if (chars[3].char == "o" && chars[4].char == "o" && chars[5].char == "o") {
            setTimeout(() => {
                this.winModal("Нолики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        }
        if (chars[6].char == "x" && chars[7].char == "x" && chars[8].char == "x") {
            setTimeout(() => {
                this.winModal("Крестики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        } else if (chars[6].char == "o" && chars[7].char == "o" && chars[8].char == "o") {
            setTimeout(() => {
                this.winModal("Нолики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        }
        if (chars[0].char == "x" && chars[4].char == "x" && chars[8].char == "x") {
            setTimeout(() => {
                this.winModal("Крестики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        } else if (chars[0].char == "o" && chars[4].char == "o" && chars[8].char == "o") {
            setTimeout(() => {
                this.winModal("Нолики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        }
        if (chars[2].char == "x" && chars[4].char == "x" && chars[6].char == "x") {
            setTimeout(() => {
                this.winModal("Крестики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        } else if (chars[2].char == "o" && chars[4].char == "o" && chars[6].char == "o") {
            setTimeout(() => {
                this.winModal("Нолики выйграли");
            }, 0)
            setTimeout(() => {
                document.location.href = "./";
            }, 1000);
        }
        return (
            <div className="wrapper">
                <Header />
                <InfoText text={this.state.text} />
                <Items state={this.state} chars={this.state.chars} moveFunc={this.moveFunc} />
            </div>
        );
    }
}

export default App;