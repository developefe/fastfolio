import React from "react";
import { Link } from "react-router-dom";
import LandingEntry from "./components/homeEntry/HomeEntry";
import HomeShowcase from "./components/homeShowcase/HomeShowcase";
import { homeShowcase1, homeShowcase2, homeShowcase3, fastfolioLogo } from "../../assets/img";
import HomeFaq from "./components/homeFaq/HomeFaq";


export default function Landing() {
    return(
        <div>
            <LandingEntry/>
            <div className="home-showcase">
                <HomeShowcase image={{backgroundImage: 'url('+homeShowcase1+')'}}/>
                <HomeShowcase image={{backgroundImage: 'url('+homeShowcase2+')'}}/>
                <HomeShowcase image={{backgroundImage: 'url('+homeShowcase3+')'}}/>
            </div>
            <div className="home-faq">
                <HomeFaq title="what is" img={fastfolioLogo} exp={["It's a website that presents you to create portfolios as ", <span>fast</span>, " and ", <span>easy</span>, " as you can."]}/>
                <HomeFaq title="how can i use it" img="" exp={["Besides being free, it is also very ", <span>simple</span>, " to use. Just ", <span>choose</span>, " a theme and fill the inputs."]}/>
                <div className="go-templates">
                    <span>So why don't you</span>
                    <Link className="link" to="/templates">Checkout Templates</Link>
                </div>
            </div>
        </div>
    )
}