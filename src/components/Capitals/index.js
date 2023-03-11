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

class Capitals extends Component {
  state = {updateChange: countryAndCapitalsList[0].id}

  onChangeInput = event => {
    this.setState({updateChange: event.target.value})
  }

  getCountry = () => {
    const {updateChange} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === updateChange,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {updateChange} = this.state
    const country = this.getCountry(updateChange)

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1>Countries And Capitals</h1>
          <div className="country-container">
            <select
              className="country-select"
              onChange={this.onChangeInput}
              value={updateChange}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>Is capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
