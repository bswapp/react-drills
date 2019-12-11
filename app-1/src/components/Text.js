import React, { Component } from 'react'


class Text extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        console.log(this.state.input)
        return (
            <div>
                <input onChange={e => this.handleChange(e)}></input>
                <p>{this.state.input}</p>

            </div>
        )
    }
}

export default Text