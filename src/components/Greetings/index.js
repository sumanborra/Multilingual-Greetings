import {Component} from 'react'
import GeetingsItem from '../GreetingsItem'
import GreetingShowImage from '../GreetingShowImage'

import './index.css'

class Greetings extends Component {
  state = {isActive: this.props.languageGreetingsList[0].id}

  isActiveButtonChanged = id => {
    this.setState({isActive: id})
  }

  render() {
    const {isActive} = this.state
    // console.log(isActive)
    const {languageGreetingsList} = this.props
    return (
      <div className="background-Container">
        <h1 className="heading-text">Multilingual Greetings</h1>
        <ul className="button-container">
          {languageGreetingsList.map(each => (
            <GeetingsItem
              languageGreetingsList={each}
              key={each.id}
              isActive={isActive}
              isActiveButtonChanged={this.isActiveButtonChanged}
            />
          ))}
        </ul>
        <GreetingShowImage
          languageGreetingsList={languageGreetingsList}
          isActive={isActive}
        />
      </div>
    )
  }
}
export default Greetings
