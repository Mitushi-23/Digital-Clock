import React from 'react'

import { Link } from 'react-router-dom'

export default function Clock(props) {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h2 className="display-4">
            <span id="content">
              {' '}
              Current Time in {props.country} Is:{' '}
              {props.result.format('HH:mm:ss')} on{' '}
              {props.result.format('ddd MMM DD YYYY')}
            </span>
          </h2>
          <p className="lead">
            We have got you covered. This is a simple hero unit, a simple
            jumbotron-style component for calling extra attention to featured
            content or information.
          </p>
          <hr className="my-4" />
          <p className="para">
            We are here to show you the time for different countries
          </p>
          <Link className="btn btn-primary btn-lg" to="/browse" role="button">
            Browse Times
          </Link>
        </div>
      </div>
    </>
  )
}
