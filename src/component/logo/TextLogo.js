import React from "react";

export default class LogoText extends React.Component {
    render() {
        return (
            <div>
                <span className={`fw-bolder fs-3 ${this.props.textStyle}`}>COSK</span>
            </div>
        );
    }
}