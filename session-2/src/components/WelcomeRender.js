import React from "react";


class WelcomeRender extends React.Component {
    state = {
        firstName: "Eden",
        LastName: "Farid"
    }

    render(){
        return (
            <>
            <h1> Welcome Rendering Component, {this.props.name}</h1>
            <h6> stated by: {this.state.firstName} {this.state.LastName}</h6>
            </>
        )
    }
}

export default WelcomeRender;