// import './index.css'

// const FootprintCard = props => {
//   const {item, onClickCard} = props
//   const {name, image} = item

//   return (
//     <li className="item footprint-card" onClick={onClickCard}>
//       <div>
//         <img
//           src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1710310711/foot-print_20_kjadd2.png"
//           className="footprint-img"
//           alt="footprint"
//         />
//         <img src={image} alt={name} className="card-back-image face" />
//       </div>
//     </li>
//   )
// }

// export default FootprintCard

import React, {useState} from 'react'
import './index.css'

const FootprintCard = ({item, handleSelectedCards, stopflip}) => {
  const {name, image} = item

  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    if (!stopflip) {
      handleSelectedCards(item)

      setFlipped(!flipped)
    }
  }

  return (
    <li
      className={`item footprint-card ${flipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div>
        <img
          src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1710310711/foot-print_20_kjadd2.png"
          className="footprint-img"
          alt="footprint"
        />
        <img src={image} alt={name} className="card-back-image face" />
      </div>
    </li>
  )
}

export default FootprintCard
