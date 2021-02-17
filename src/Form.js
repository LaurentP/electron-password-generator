import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={e => this.props.handleSubmit(e)}>
                <p>
                    <label htmlFor="length" className="label">Longueur</label><input type="number" id="length" className="length" value={this.props.length} onChange={e => this.props.handleChangeLength(e)} />
                </p>
                <p>
                    <span className="label">Inclure</span>
                    <input type="checkbox" id="numbers" checked={this.props.numbers} onChange={e => this.props.handleChangeNumbers(e)} /><label htmlFor="numbers">Chiffres</label>
                    <input type="checkbox" id="letters" checked={this.props.letters} onChange={e => this.props.handleChangeLetters(e)} /><label htmlFor="letters">Lettres</label>
                    <input type="checkbox" id="special" checked={this.props.special} onChange={e => this.props.handleChangeSpecial(e)} /><label htmlFor="special">Caractères spéciaux</label>
                </p>
                <p>
                    <input type="submit" value="Générer" />
                </p>
            </form>
        )
    }
}