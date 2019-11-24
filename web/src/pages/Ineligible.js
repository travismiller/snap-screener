import React from 'react'
import { withTranslation, Trans } from 'react-i18next'
import { default as BasePage } from '../components/Page'
import ContactInformation from '../components/ContactInformation'
import iconConnect from '../img/icons/family.svg'

const Page = () => (
  <BasePage>
    <div className="light-blue-page-content">
      <img alt="" src={iconConnect} className="float-right m-4 mr-0 w-32 hidden md:inline" />

      <div className="flex">
        <article className="text-left">

          <h1>A Facilitator will Contact You</h1>

          <p><Trans>A school staff member will contact you within 3-5 business days to provide you with food assistance resources.</Trans></p>

          <ContactInformation />

          <h2>Other Resources</h2>

          <p><Trans>For immediate community resources <a href="https://csctulsa.org/211eok/">click here</a>.</Trans></p>

          {/* <p>
            <button className="btn"><Trans>Additional Resources</Trans></button>
          </p> */}
        </article>
      </div>
    </div>
  </BasePage>
)

export default withTranslation()(Page)
