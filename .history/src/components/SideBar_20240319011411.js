import React from 'react'
import Link from './Link'

const SideBar = () => {

    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'}
    ]

    const renderedLinks = links.map((link)=>{
        return <Link key={links.label} to={links.path}>{links.label}</Link>
    })
  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col'>
        {renderedLinks}
    </div>
  )
}

export default SideBar