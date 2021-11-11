import React from 'react'
import { Link } from 'react-router-dom'
export default function navbar(props) {
  return (
    <>
      <nav
        className="navbar 
          navbar-inverse navbar-expand-sm 
           bg-dark navbar-dark"
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              TimeClock
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="active" to="/browse">
                Browse
              </Link>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="/">
                Countries <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/" onClick={props.India}>
                    India
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Australia}>
                    Australia
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.USA}>
                    USA
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.China}>
                    China
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Canada}>
                    Canada
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.England}>
                    England
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Dubai}>
                    Dubai
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Europe}>
                    Europe
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Spain}>
                    Spain
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Russia}>
                    Russia
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Denmark}>
                    Denmark
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.New_York}>
                    New_York
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Brazil}>
                    Brazil
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Hong_Kong}>
                    Hong_Kong
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.Japan}>
                    Japan
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.North_Korea}>
                    North_Korea
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={props.South_Korea}>
                    South_Korea
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
