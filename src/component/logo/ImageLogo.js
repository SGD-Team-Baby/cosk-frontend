import React from "react";
import { ReactComponent as Background } from '../../assets/logo_background.min.svg'
import { ReactComponent as Foreground } from '../../assets/logo_foreground.min.svg'

export default class Logo extends React.Component {
    render() {
        const logoStyle = {
            position: "relative",
            width: 3 + "rem",
            height: 3 + "rem"
        }

        const logoBackgroundStyle = {
            position: "absolute",
            width: 3 + "rem",
            height: 3 + "rem",
        }

        const logoForegroundStyle = {
            position: "absolute",
            width: 2.6 + "rem",
            height: 3 + "rem",
            margin: "0 0 0 0.2rem"
        }

        return (
                <div style={logoStyle}>
                    <Background style={logoBackgroundStyle} />
                    <Foreground style={logoForegroundStyle} />
                </div>
        )
    }
}