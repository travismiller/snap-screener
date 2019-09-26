import React from 'react'
import { Link } from "react-router-dom"
import LanguageButton from './LanguageButton'

const Header = ({ logo }) => {
  return (
    <header className="flex items-center">
      <div className="flex-1 text-left">
        <Link to="/"><img alt="" src={logo} /></Link>
      </div>
      <div className="flex-1 text-right text-xs md:text-base">
        <LanguageButton code="en" name="English" />
        {' '}|{' '}
        <LanguageButton code="es" name="Español" />
      </div>
    </header>
  )
}

export default Header
