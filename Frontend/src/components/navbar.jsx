
'use client'

import { useState } from 'react'


import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=" ">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/logo.svg"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>

            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
          

          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/twousers" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
      </div>
  )
}
