import { Component } from "react";

class Item extends Component {
    constructor (props) {
        super(props);
        this.state = {
            char: ""
        }
    }
    changeChar = (id, char) => {
        if (this.state.char.length == 0 && this.props.state.lose == false) {
            this.setState({
                char: this.props.state.move
            });
            this.props.moveFunc(id, char);
        }
    }
    render () {
        const id = this.props.id;
        const className = this.props.className;
        return (
            <div className={"item " + className} onClick={() => this.changeChar(id, this.props.state.move)}>
                {this.state.char}
            </div>
        );
    }
}

export default Item;