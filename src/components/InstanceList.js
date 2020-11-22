import React from 'react'
import Filter from './Filter'
import InstanceCard from './InstanceCard'
import {Link} from 'react-router-dom'
import data from '../data/100_sample_from_val_predicted.json'

function InstanceList({mode}) {
  // const requireImages = require.context('../data/image_val_100/', true, /\.jpg$/)
  // const allImgpaths = requireImages.keys().map(path => ({path, file: requireImages(path)}))
  console.log(data)
  return (
    <div className='instance-list-container'>
      <Filter />
      <div className='cards-container'>
        {data.map((instance, idx) => <Link to={`/${mode}/instances/${idx}`} key={idx}><InstanceCard instance={instance} /></Link>)}
      </div>
      <style jsx='true'>
        {`
        .instance-list-container {
          display: flex;
          padding: 30px;
        }

        .cards-container {
          display: flex;
          width: 80vw;
          flex-wrap: wrap;
        }
        `}
      </style>
    </div>
  )
}

export default InstanceList
