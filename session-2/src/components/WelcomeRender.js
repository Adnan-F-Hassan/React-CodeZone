import React from "react";


class WelcomeRender extends React.Component {

    render(){
        return (
            <h1> Welcome Rendering Component, {this.props.name}</h1>
        )
    }
}

export default WelcomeRender;