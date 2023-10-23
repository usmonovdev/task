import React from 'react'

const navData = [
  {
    name: "home",
    id: 1
  },
  {
    name: "marketplace",
    id: 2
  },
  {
    name: "service center",
    id: 3
  },
  {
    name: "blog",
    id: 4
  },
  {
    name: "contacts",
    id: 5
  }
]

const Navbar = () => {
  return (
    <nav className='container'>
      <div className='nav'>
        <p>Logo</p>
        <ul>
          {navData.map((nav) => {
            return (
              <li key={nav.id}>
                <p>{nav.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar