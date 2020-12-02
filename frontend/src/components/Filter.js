import React from 'react'
import SingleListBox from './SingleListBox'

function Filter() {
  // option format: [value for logic, string to display]
  const xAxisOptions = [
    ['bleu', 'Bleu Score'],
    ['cider', 'CIDEr Score'],
  ]

  const yAxisOptions = [
    ['cider', 'CIDEr Score'],
    ['bleu', 'Bleu Score'],
  ]

  const sceneOptions = [
    ['indoor', 'Indoor'],
    ['outdoor', 'Outdoor'],
    ['kitchen', 'Kitchen'],
  ]

  const objectNameOptions = [
    ['human', 'Human'],
    ['cat', 'Cat'],
    ['dog', 'Dog'],
  ]

  const ActionTypeOptions = [
    ['verb1', 'Verb1'],
    ['verb2', 'Verb2'],
    ['verb3', 'Verb3'],
  ]
  
  const markOptions = [
    ['true', 'True'],
    ['false', 'False'],
  ]


  return (
    <div>
      <div className='filter-container'>
        <SingleListBox label='X Axis' options={xAxisOptions} />
        <SingleListBox label='Y Axis' options={yAxisOptions} />
        <SingleListBox label='Scene' options={sceneOptions} />
        <SingleListBox label='Object Name' options={objectNameOptions} />
        <SingleListBox label='Action Type' options={ActionTypeOptions} />
        <SingleListBox label='Mark' options={markOptions} />
      </div>
      <style jsx='true'>
        {`
        .filter-container {
          padding: 30px;
          background-color: #C4C4C4;
          width: 15vw;
        }
        `}
      </style>
    </div>
  )
}

export default Filter
