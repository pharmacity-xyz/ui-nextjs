import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(1)
  return (
    <div>
      <button
        onClick={() => setCounter(counter - 1)}
        className="text-[#75b239] border border-[#75b239] p-2 rounded-l-md text-xl"
      >
        -
      </button>
      <input
        type="number"
        readOnly
        value={counter}
        className="text-center border border-gray pt-3 pb-2 mt-8"
      />
      <button
        onClick={() => setCounter(counter + 1)}
        className="text-[#75b239] border border-[#75b239] p-2 rounded-r-md text-xl"
      >
        +
      </button>
    </div>
  )
}
