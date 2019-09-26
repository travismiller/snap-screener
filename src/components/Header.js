import React from 'react'
import LanguageButton from './LanguageButton'

const Header = ({ logo }) => {
  return (
    <header className="flex items-center">
      <div className="flex-1 text-left">
        <img alt="" src={logo} />
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
