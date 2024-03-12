import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Login",
      path: "/login"
    }
  ]
  return (
    <>
      <div className='w-full bg-white flex items-center justify-center h-16 shadow-sm shadow-orange-200 sticky'>
        <div className='w-5/6 flex items-center justify-between'>
          <h1 className='font-bold'>
            Max
            <span className='text-orange-500'>
              Quiz
            </span>
          </h1>
          <ul className='flex w-2/4 justify-evenly items-center font-bold'>
            {
              NavLinks.map((links, index) => (
                <li key={index}>
                  <NavLink to={links.path} className="border-2 border-transparent p-5">
                    {links.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar