import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {isCapitalOf: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({isCapitalOf: event.target.value})
  }

  getCountryCapital = () => {
    const {isCapitalOf} = this.state

    const getCapitalCountry = countryAndCapitalsList.find(
      eachCity => eachCity.id === isCapitalOf,
    )

    return getCapitalCountry
  }

  render() {
    const {isCapitalOf} = this.state
    const {country} = this.getCountryCapital(isCapitalOf)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="questions-container">
            <select
              className="capital-select"
              value={isCapitalOf}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCity => (
                <option
                  className="option"
                  key={eachCity.id}
                  value={eachCity.id}
                >
                  {eachCity.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
