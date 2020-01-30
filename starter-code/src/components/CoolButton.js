import React, { Component } from "react";

class CoolButton extends Component {
    render() {
        const { className, children } = this.props;

        return (
            <button className={className}>{children}</button>
        );
    }
}

export default CoolButton;