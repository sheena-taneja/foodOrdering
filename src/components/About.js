import UserClass from "./UserClass";
import { Component } from "react";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="about">
                <h1>About Us</h1>
                <h3>This is about Us page</h3>
                <UserContext.Consumer>{({loggedInUser})=><h2>{loggedInUser}</h2>}</UserContext.Consumer>
                <UserClass name={"Sheena"} location={"Noida"} contact={"sheena@yopmail.com"} />
            </div>
        )
    }

}

export default About;