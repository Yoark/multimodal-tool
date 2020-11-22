import React, {useState, useEffect} from 'react'
import DropdownMenu from './DropdownMenu'
import {useHistory, useLocation} from 'react-router-dom'

function Nav() {
  const history = useHistory()
  const location = useLocation()
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    if(/^\S*\/instances\//.test(location.pathname)) setShowNav(false)
    else setShowNav(true)
  }, [location])

  const jumpTo = (path1, path2) => {
    history.push({pathname: `/${path1}/${path2}`})
  }
  
  const exploreDropdown = [
    ['Instance', () => jumpTo('explore', 'instances')],
    ['Scatter Plot', () => jumpTo('explore', 'plot')],
  ]
  
  const comparisonDropdown = [
    ['Instance', () => jumpTo('comparison', 'instances')],
    ['Scatter Plot', () => jumpTo('comparison', 'plot')],
  ]

  return (showNav &&
    <div className='nav-container'>
      <p>Mode: </p>
      <DropdownMenu button={<div>Explore</div>} content={exploreDropdown} />
      <DropdownMenu button={<div>Comparison</div>} content={comparisonDropdown} />
      <style jsx='true'>
        {`
        .nav-container {
          height: 140px;
          padding: 0px 50px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        `}
      </style>
    </div>
  )
}

export default Nav
