import React, { Component } from 'react'
import './App.css'
import generate from './Generate'
import icon from './icon.png'
import Form from './Form'
import Result from './Result'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      length: 20,
      numbers: true,
      letters: true,
      special: true,
      result: '',
      copied: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeLength = this.handleChangeLength.bind(this)
    this.handleChangeNumbers = this.handleChangeNumbers.bind(this)
    this.handleChangeLetters = this.handleChangeLetters.bind(this)
    this.handleChangeSpecial = this.handleChangeSpecial.bind(this)
    this.handleCopyClick = this.handleCopyClick.bind(this)
  }

  handleChangeLength(e) {
    this.setState({ length: e.target.value })
  }

  handleChangeNumbers(e) {
    this.setState({ numbers: e.target.checked })
  }

  handleChangeLetters(e) {
    this.setState({ letters: e.target.checked })
  }

  handleChangeSpecial(e) {
    this.setState({ special: e.target.checked })
  }

  handleSubmit(e) {
    e.preventDefault()
    const result = generate(
      this.state.length,
      this.state.numbers,
      this.state.letters,
      this.state.special
    )
    this.setState({ result: result, copied: false })
  }

  handleCopyClick() {
    if (this.state.result.length > 0) {
      document.getElementById('result').select()
      document.execCommand('copy')
      this.setState({copied: true})
    }
  }

  render() {
    return (
      <div>
        <p className="text-center"><img src={icon} alt=""/></p>
        <Form
          length={this.state.length}
          numbers={this.state.numbers}
          letters={this.state.letters}
          special={this.state.special}
          handleSubmit={this.handleSubmit}
          handleChangeLength={this.handleChangeLength}
          handleChangeNumbers={this.handleChangeNumbers}
          handleChangeLetters={this.handleChangeLetters}
          handleChangeSpecial={this.handleChangeSpecial}
        />
        <Result result={this.state.result} handleCopyClick={this.handleCopyClick} copied={this.state.copied} />
      </div>
    )
  }

}