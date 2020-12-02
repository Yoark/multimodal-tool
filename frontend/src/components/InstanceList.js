import React, {useContext} from 'react'
import Filter from './Filter'
import {AnnotatedData} from './DataContext'
import InstanceCard from './InstanceCard'
import {Link} from 'react-router-dom'
// import data from '../../public/data/val_annots.json'


function InstanceList({mode}) {
  // const requireImages = require.context('../data/image_val_100/', true, /\.jpg$/)
  // const allImgpaths = requireImages.keys().map(path => ({path, file: requireImages(path)}))
  const data = useContext(AnnotatedData)
  const baseURL = '../src/data/image_val_100/'
  return (
    <div className='instance-list-container'>
      <Filter />
      <div className='cards-container'>
        {/* {data.annotatedData && data.annotatedData.map((instance, idx) => <Link to={`/${mode}/instances/${idx}`} key={idx}><InstanceCard instance={instance} /></Link>)} */}
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
