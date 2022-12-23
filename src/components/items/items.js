import { Component } from "react";
import Item from "../item/item";

class Items extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        const charsArray = this.props.chars;
        const items = charsArray.map(item => {
            return (
                <Item state={this.props.state} moveFunc={this.props.moveFunc} className={item.className} char={item.char} id={item.id} />
            );
        }); 
        return (
            <div className="items">
                {items}
            </div>
        );
    }
}

export default Items;