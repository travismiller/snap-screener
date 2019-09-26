import React from 'react'
import { withTranslation, Trans } from 'react-i18next'
import { default as BasePage } from '../components/Page'

const Page = () => (
  <BasePage bodyClass="ruled-headers page-dark-blue" color="dark-blue" whiteLogo={true}>
    <div className="lg:flex lg:items-end text-left">
      <article className="lg:w-2/3">
        <h1><Trans>You may be eligible to receive SNAP benefits!</Trans></h1>
        <p><Trans>Based on the information you provided you and your family may be eligible to receive SNAP benefits.</Trans></p>

        <h2><Trans>Who will contact you?</Trans></h2>
        <p><Trans>You will be contacted by a SNAP trained school staff member within three business days to assist you with the SNAP application.</Trans></p>

        <h2><Trans>Information you will need when applying for SNAP benefits:</Trans></h2>
        <ul>
          <li><Trans>All household members: name, date of birth, social security number (if available)</Trans></li>
          <li><Trans>Income (if applicable): paycheck stubs, child support, alimony, social security payments, etc.</Trans></li>
          <li><Trans>Expenses: housing and utility expenses</Trans></li>
          <li><Trans>Utility bills to verify residency</Trans></li>
          <li><Trans>Private health insurance information</Trans></li>
        </ul>
      </article>

      <aside className="lg:w-1/3 lg:ml-16">
        <h2>Jennifer Moreno</h2>
        <p>
          Mayo Demonstration School<br />
          (918) 925-1500<br />
          <a href="mailto:morenje@tulsaschools.org">morenje@tulsaschools.org</a>
        </p>
        <p>
          <button className="btn"><Trans>Apply Online</Trans></button>
        </p>
      </aside>
    </div>
  </BasePage>
)

export default withTranslation()(Page)
