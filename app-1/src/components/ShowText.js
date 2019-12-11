import React, { Component } from 'react'

class ShowText extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

export default ShowText