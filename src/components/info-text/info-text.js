import { Component } from "react";

class InfoText extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <h2 className="info-text">{this.props.text}</h2>
            </div>
        );
    }
}

export default InfoText;