import React from 'react'
import '../../CSS/Prices.css'

// REDUX 
import { useSelector } from 'react-redux'

function Prices() {

    const teamMemberData = useSelector(state => state.teamMember.teamMemberData)

  return (
    <div className='Prices'>
      <h2>Prices</h2>
      <p>Prices are Subject to Change</p>
      <div className="pricing__container">
            {Object.entries(teamMemberData.services)
                .filter(([key, _]) => !key.endsWith('Price'))
                .map(([key, value], index) => {
                    const priceKey = `${key}Price`;
                    return (
                        <div key={index} className="service__and__price">
                            <h4>{value}</h4>
                            <p>...</p>
                            <h4>${teamMemberData.services[priceKey]}</h4>
                        </div>
                    );
                })
            }
       </div>


    </div>
  )
}

export default Prices
