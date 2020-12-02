import React, {useState} from 'react'
import {Listbox, ListboxOption} from '@reach/listbox'
// other CSS is defined in styles/list-box.css

function SingleListBox({label, options}) {
  const [value, setValue] = useState(options[0][0])
  return (
    <>
      <p className='option-label'>{label}</p>
      <Listbox value={value} onChange={(value) => setValue(value)}>
        {options?.map((option, idx) => <ListboxOption value={option[0]} key={idx}>{option[1]}</ListboxOption>)}
      </Listbox>
      <style jsx='true'>
        {`
        .option-label {
          margin: 10px 0px;
        }
        `}
      </style>
    </>
  )
}

export default SingleListBox
