import React, { Component } from 'react'

class List extends Component {
    constructor() {
        super()
        this.state = {
            cats: ['Harvey', 'Hendrix', 'Fluffles', 'Sir Fancy Bacon', 'Tiggy']
        }
    }



    render() {
        let catShow = this.state.cats.map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })
        return (
            <div>
                {catShow}
            </div>
        )
    }

}

export default List