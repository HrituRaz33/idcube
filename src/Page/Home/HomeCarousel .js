import React, { Component } from "react";
import Slider from "react-slick";
import ourClient from "../../imgs/our-client-separator.png"


import altisourceLogo from "../../imgs/altisource-logo.png"
import basfLogo19 from "../../imgs/basf-logo19.png"
import cairnIndia from "../../imgs/cairn-india-logo19.png"
import cdotLogo from "../../imgs/cdot-logo.png"
import ChryslerLogo from "../../imgs/Chrysler-logo.png"
import datwylerLogo from "../../imgs/datwyler-logo.png"
import GoodrichLogo from "../../imgs/Goodrich_logo.png"
import gskLogo from "../../imgs/gsk-logo.png"
import hdfcbankLogo from "../../imgs/hdfcbank-logo.png"
import hundaiLogo from "../../imgs/hundai-logo.png"
import OLALogo from "../../imgs/OLA-logo-web.jpg"



export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear"
        };
        return (
            <div className="w-4/5 mx-auto">
                <div className="flex flex-col items-center ">
                    <h2 className="text-3xl font-bold">Our Client</h2>
                    <img src={ourClient} alt="" />
                </div>
                <Slider {...settings}>
                    <div>
                        <img className="w-48" src={altisourceLogo} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={basfLogo19} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={cairnIndia} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={cdotLogo} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={ChryslerLogo} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={datwylerLogo} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={GoodrichLogo} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={gskLogo} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={hdfcbankLogo} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={hundaiLogo} alt="" />
                    </div>
                    <div>
                        <img className="w-48" src={OLALogo} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}