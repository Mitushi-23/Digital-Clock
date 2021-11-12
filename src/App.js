import './App.css'
import Browse from './components/Browse'
import Clock from './components/Clock'
import moment from 'moment-timezone'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import React, { useState, useEffect } from 'react'

function App() {
  let a = new Date()

  const [country, setcountry] = useState('India')

  const [timezone, setTimezone] = useState('Asia/Kolkata')

  let result
  result = moment.tz(a, timezone)

  let s = parseInt(result.format('ss'))
  const [seconds, setseconds] = useState(s)
  useEffect(() => {
    var timerID = setInterval(() => {
      setseconds((seconds) => seconds + 1)
    }, 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  })

  const USA = () => {
    setcountry('USA')
    setTimezone('US/Pacific')
  }
  const India = () => {
    setcountry('India')
    setTimezone('Asia/Kolkata')
  }
  const China = () => {
    setcountry('China')
    setTimezone('Asia/Shanghai')
  }
  const Canada = () => {
    setcountry('Canada')
    setTimezone('America/St_Johns')
  }
  const Australia = () => {
    setcountry('Australia')
    setTimezone('Australia/Sydney')
  }
  const England = () => {
    setcountry('England')
    setTimezone('Europe/London')
  }
  const Dubai = () => {
    setcountry('Dubai')
    setTimezone('Asia/Dubai')
  }
  const Europe = () => {
    setcountry('Europe')
    setTimezone('Europe/Andorra')
  }
  const Spain = () => {
    setcountry('Spain')
    setTimezone('Europe/Madrid')
  }
  const Russia = () => {
    setcountry('Russia')
    setTimezone('Europe/Moscow')
  }
  const Denmark = () => {
    setcountry('Denmark')
    setTimezone('Europe/Copenhagen')
  }
  const New_York = () => {
    setcountry('New York')
    setTimezone('America/New_York')
  }
  const Brazil = () => {
    setcountry('Brazil')
    setTimezone('America/Noronha')
  }
  const Hong_Kong = () => {
    setcountry('Hong Kong')
    setTimezone('Asia/Hong_Kong')
  }
  const Japan = () => {
    setcountry('Japan')
    setTimezone('Asia/Tokyo')
  }
  const North_Korea = () => {
    setcountry('North Korea')
    setTimezone('Asia/Pyongyang')
  }
  const South_Korea = () => {
    setcountry('South Korea')
    setTimezone('Asia/Seoul')
  }

  return (
    <>
      <Router>
        <Navbar
          USA={USA}
          India={India}
          China={China}
          Canada={Canada}
          Australia={Australia}
          England={England}
          Dubai={Dubai}
          Europe={Europe}
          Spain={Spain}
          Russia={Russia}
          Denmark={Denmark}
          New_York={New_York}
          Brazil={Brazil}
          Hong_Kong={Hong_Kong}
          Japan={Japan}
          North_Korea={North_Korea}
          South_Korea={South_Korea}
        />
        <Switch>
          <Route exact path="/">
            <Clock
              country={country}
              result={result}
              seconds={seconds}
              // ampm={ampm}
            />
          </Route>
          <Route exact path="/browse">
            <Browse
              USA={USA}
              India={India}
              China={China}
              Canada={Canada}
              Australia={Australia}
              England={England}
              Dubai={Dubai}
              Europe={Europe}
              Spain={Spain}
              Russia={Russia}
              Denmark={Denmark}
              New_York={New_York}
              Brazil={Brazil}
              Hong_Kong={Hong_Kong}
              Japan={Japan}
              North_Korea={North_Korea}
              South_Korea={South_Korea}
            />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
