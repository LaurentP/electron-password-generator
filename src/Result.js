import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <div>
                <p><input type="text" readOnly id="result" value={this.props.result} /></p>
                <p><button onClick={() => this.props.handleCopyClick()}>Copier dans le presse-papiers</button></p>
                <p className="text-center">
                    {this.props.copied === true ? 'Mot de passe copié dans le presse-papiers' : ''}
                </p>
            </div>
        )
    }
}