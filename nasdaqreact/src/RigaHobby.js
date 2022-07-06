import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class RigaHobby extends Component {
    static propTypes = { tipo: PropTypes.string }

    render(props) {
        return (
            <React.Fragment>
                <li>{this.props.tipo}</li>
            </React.Fragment>
        )
    }
}

export default RigaHobby