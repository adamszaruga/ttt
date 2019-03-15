import React, { Component } from 'react';

class Tile extends Component {

    handleChange(e) {
        let newValue = e.target.value; 
        if (newValue !== "X" && newValue !== "O") {
            return;
        }
        this.props.update(newValue, this.props.index)
    }

    render() {
        let value = this.props.value ===  "-" ? "" : this.props.value
        return (
            <div className="Tile">
                <input value={value} onChange={e => this.handleChange(e)}/>          
            </div>
        )
    }
}

export default Tile;