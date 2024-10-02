import React from 'react'
import CurrencySelector from './CurrencySelector'

function AmountInput() {
  return (
    <>
        <div>
            {/* <label htmlFor="amount">From</label> */}
            <input id="amount" type="number" />
            <CurrencySelector type="primary"/>
        </div>

        <div>
            {/* <label htmlFor="amount">To</label> */}
            <input id="amount" type="number" value={0.00} disabled/>
            <CurrencySelector/>
        </div>
    </>
  )
}

export default AmountInput
