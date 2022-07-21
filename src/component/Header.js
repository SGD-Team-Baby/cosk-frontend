import React from "react";
import background from '../assets/banner_image.jpg'

class Header extends React.Component {
    render() {
        const headerStyle = {
            backgroundImage: `url(${background})`,
            minHeight: "480px",
            height: "45vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }

        return (
            <header className="container-fluid shadow"
                    style={headerStyle}>
                <div className="pt-5"></div>
                <div className="pt-5"></div>
                <div className="container site-heading text-start text-light text-opacity-90 pt-5">
                    <h1 className="display-1">응애 나 코딩 못해</h1>
                    <p className="h1">도와 "줘"</p>

                    <div className="d-flex mt-5 gap-3" style={{float: "left"}}>
                        <button type="button" className="btn btn-primary btn-lg rounded-pill">살려주기</button>
                        <button type="button" className="btn btn-outline-primary btn-lg rounded-pill">뭔데요</button>
                    </div>

                </div>
            </header>
        );
    }
}

export default Header