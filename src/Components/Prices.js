import React from 'react'
import '../CSS/Prices.css'

// REDUX 
import { useSelector } from 'react-redux'

function Prices() {

    const teamMemberData = useSelector(state => state.teamMember.teamMemberData)

  return (
    <div className='Prices'>
      <h2>Prices</h2>
      <p>Prices are Subject to Change</p>
      <div className="pricing__container">

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.haircut}</h4>
            <p>...</p>
            <h4>${teamMemberData.services.womens.haircutPrice}</h4>
        </div>

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.balyage}</h4>
            <p>........</p>
            <h4>${teamMemberData.services.womens.balyagePrice}</h4>
        </div>

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.waxing}</h4>
            <p>...</p>
            <h4>${teamMemberData.services.womens.waxingPrice}</h4>
        </div>

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.color}</h4>
            <p>...</p>
            <h4>${teamMemberData.services.womens.colorPrice}</h4>
        </div>

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.highlights}</h4>
            <p>...</p>
            <h4>${teamMemberData.services.womens.highlightsPrice}</h4>
        </div>

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.rootTouchUp}</h4>
            <p>...</p>
            <h4>${teamMemberData.services.womens.rootTouchUpPrice}</h4>
        </div>

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.perm}</h4>
            <p>...</p>
            <h4>${teamMemberData.services.womens.permPrice}</h4>
        </div>

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.relaxer}</h4>
            <p>...</p>
            <h4>${teamMemberData.services.womens.relaxerPrice}</h4>
        </div>

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.whiteout}</h4>
            <p>...</p>
            <h4>${teamMemberData.services.womens.whiteoutPrice}</h4>
        </div>

        {/* SERVICE  */}
        <div className="service__and__price">
            <h4>{teamMemberData.services.womens.haircut}</h4>
            <p>...</p>
            <h4>${teamMemberData.services.womens.haircutPrice}</h4>
        </div>



      </div>

    </div>
  )
}

export default Prices
