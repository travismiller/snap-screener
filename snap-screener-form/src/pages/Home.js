import React from 'react'
import { Link } from "react-router-dom"
import { withTranslation, Trans } from 'react-i18next'
import {default as BasePage} from '../components/Page'

import imageFamily from '../img/family.svg'
import imagePhone from '../img/phone.svg'
import imageArrows from '../img/arrows.svg'

const Page = () => (
  <BasePage bodyClass="page-yellow">
    <div>
      <h1><Trans>Find out if you are eligible for food assistance.</Trans></h1>
      <div className="md:flex">
        <p className="mx-8 md:flex-1"><img className="h-10 mx-auto" alt="" src={imageFamily} /><Trans>Tell us some information about the members of your family.</Trans></p>
        <p className="mx-8 md:flex-1"><img className="h-10 mx-auto" alt="" src={imagePhone} /><Trans>We will connect you with a Tulsa Public Schools representative who will…</Trans></p>
        <p className="mx-8 md:flex-1"><img className="h-10 mx-auto" alt="" src={imageArrows} /><Trans>Let us know how we can get in touch with you.</Trans></p>
      </div>
      <p>
        <Link className="btn" to="/form"><Trans>Get Started</Trans></Link>
      </p>
    </div>
  </BasePage>
)

export default withTranslation()(Page)
