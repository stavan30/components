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
    <div>

    </div>
  )
}

export default SideBar