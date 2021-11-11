import React from 'react'
import { Link } from 'react-router-dom'

export default function Browse(props) {
  return (
    <>
      <h1>Choose the Country to know the Time</h1>
      <div className="line"></div>
      <div className="countries">
        <div className="map">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.e2ohuOyxGwceucTvBkOjPAHaD5&pid=Api&P=0&w=260&h=138"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn1 btn-primary btn-lg"
            to="/"
            onClick={props.USA}
            role="button"
          >
            USA
          </Link>
        </div>
        <div className="map">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.NYeBDL6qIonrqPjJyyz7awHaEK&pid=Api&P=0&w=327&h=185"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn2 btn-primary btn-lg"
            to="/"
            onClick={props.India}
            role="button"
          >
            India
          </Link>
        </div>
        <div className="map">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.QkoGvV6MaMdAWFAxFXsD5gHaE8&pid=Api&P=0&w=245&h=164"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.China}
            role="button"
          >
            China
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.Europe}
            role="button"
          >
            Europe
          </Link>
        </div>

        <div className="map">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.iScx5kFNv7Cmohamq5S8mQHaFN&pid=Api&P=0&w=261&h=184"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn1 btn-primary btn-lg"
            to="/"
            onClick={props.England}
            role="button"
          >
            England
          </Link>
        </div>
        <div className="map">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.c7jhG7wq1-HZb5cELi02HwHaDt&pid=Api&P=0&w=303&h=152"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn2 btn-primary btn-lg"
            to="/"
            onClick={props.Australia}
            role="button"
          >
            Australia
          </Link>
        </div>
        <div className="map">
          <img
            src="https://tse3.explicit.bing.net/th?id=OIP.MrJ4f6_htAlaiyNvJSb5kgHaEH&pid=Api&P=0&w=299&h=167"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.Canada}
            role="button"
          >
            Canada
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.Dubai}
            role="button"
          >
            Dubai
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.Spain}
            role="button"
          >
            Spain
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.Russia}
            role="button"
          >
            Russia
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Denmark_flag.GIF/320px-Denmark_flag.GIF"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.Denmark}
            role="button"
          >
            Denmark
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_New_York_City.svg/1200px-Flag_of_New_York_City.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.New_York}
            role="button"
          >
            New York
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.Brazil}
            role="button"
          >
            Brazil
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Hong_Kong_%281990%29.svg/200px-Flag_of_Hong_Kong_%281990%29.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.Hong_Kong}
            role="button"
          >
            Hong Kong
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.Japan}
            role="button"
          >
            Japan
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/2560px-Flag_of_North_Korea.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.North_Korea}
            role="button"
          >
            North Korea
          </Link>
        </div>

        <div className="map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png"
            width="377"
            height="234"
            alt=""
          />
          <Link
            className="btn3 btn-primary btn-lg"
            to="/"
            onClick={props.South_Korea}
            role="button"
          >
            South Korea
          </Link>
        </div>
      </div>
    </>
  )
}
