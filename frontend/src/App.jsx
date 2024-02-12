import { useState } from 'react'
import './App.css'


const ShowContent = ({ book, score }) => {
  return (
    <ul>
      <li>{book = book} {score = score}</li>
    </ul>
  )
}

const AlexContent = ({ onClick }) => {
  return (
    <>
      <ul>
        <li>Gulag Archipelago</li>
        <li>Life and Fate</li>
        <li>Brothers Karamazovs</li>
      </ul>
      <Button text="Back" onClick={onClick} />
    </>
  )
}

const CajsaContent = ({ bookMap, onBackClick, onInfoClick }) => {
  return (
    <>
      {Object.keys(bookMap).map((bookName) => <ShowContent book={bookName} score={bookMap[bookName]} key={bookName} />)}
      < Button text="Back" onClick={onBackClick} />
      < Button text="Info about Cajsa" onClick={onInfoClick} />
    </>
  )
}


function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

function Form(props) {
  return (
    <form >

    </form>

  )
}

function App() {
  const [showCajsaBooks, setShowCajsaBooks] = useState(false)
  const [showAlexBooks, setShowAlexBooks] = useState(false)
  const [showInfo, setShowinfo] = useState(false)

  const cajsaBooks = {
    "The unbearable lightness of being": 4,
    "All the light we cannot see": 4,
    "Into the wild": 5
  }

  const handleClickCajsa = () => {
    setShowCajsaBooks(true);
    setShowAlexBooks(false);
  }

  const handleClickAlex = () => {
    setShowCajsaBooks(false);
    setShowAlexBooks(true);
  }

  const handleBackClick = () => {
    setShowCajsaBooks(false);
    setShowAlexBooks(false);
  }

  const handleInfoClick = () => {
    setShowinfo(true)
  }

  const handleInfoBackClick = () => {
    setShowinfo(false)
  }

  if (showAlexBooks) {
    return <AlexContent onClick={handleBackClick} />
  }

  if (showCajsaBooks) {
    return (
      <div>
        {showInfo === true ?
          <div>
            <p>
              Information about the user:
            </p>
            <Button onClick={handleInfoBackClick} text={"Back"}/>
          </div> :
          <CajsaContent bookMap={cajsaBooks} onBackClick={handleBackClick} onInfoClick={handleInfoClick} />
        }
      </div>
    )
  }

  return (
    <>
      <h1>Books</h1>
      <h2>What we have read so far in life and what we want to read next</h2>
      <h3>With recommendations and ratings</h3>
      <div className="People">
        <div className="Cajsa">
          <a>
            <img className="Pic" src="images/IMG_3549.jpg" alt="Cajsa's picture" />
          </a>
          <p> Cajsa, 24 </p>
          <p className="click">
            <Button onClick={handleClickCajsa} text="Cajsa's books" />
          </p>
        </div>
        <div className="Alex">
          <a>
            <img className="Pic" src="images/IMG_3548.jpg" alt="Alex's picture" />
          </a>
          <p> Alex, 25 </p>
          <p className="click">
            <Button onClick={handleClickAlex} text="Alex's books" />
          </p>
        </div>
      </div>
    </>
  )
}

export default App
