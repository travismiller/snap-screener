import React from 'react'
import { withTranslation, Trans } from 'react-i18next'
import { default as BasePage } from '../components/Page'
import ContactInformation from '../components/ContactInformation'
import iconConnect from '../img/icons/family.svg'

const Page = () => (
  <BasePage>
    <div className="light-blue-page-content">
      <div className="lg:flex text-left lg:flex-wrap">
        <div className="w-full">
          <img alt="" src={iconConnect} className="float-right m-4 mr-0 w-32 hidden md:inline" />
          <h1>You may be eligible for food assistance.</h1>
          <p>OKDHS determines eligibility for SNAP benefits. Based on the income information you provided you are likely eligible to receive SNAP benefits.</p>
        </div>

        <div className="lg:w-2/3 lg:pr-16">

          <h2>What happens next:</h2>

          <p>A school staff member will contact you within 3-5 business days to assist you with the SNAP application.</p>

          <ContactInformation />
        </div>

        <div className="lg:w-1/3">
          <h2><Trans>Information you will need when applying for SNAP benefits:</Trans></h2>

          <ul>
            <li><Trans>All household members: name, date of birth, social security number (if available)</Trans></li>
            <li><Trans>Income (if applicable): paycheck stubs, child support, alimony, social security payments, etc.</Trans></li>
            <li><Trans>Expenses: housing and utility expenses</Trans></li>
            <li><Trans>Utility bills to verify residency</Trans></li>
            <li><Trans>Private health insurance information</Trans></li>
          </ul>

          <p>You can also apply for SNAP benefits online <a href="https://www.okdhslive.org/AuthApplicantLogin.aspx">click here</a>.</p>

          <p>
            <button className="btn"><Trans>Apply Online</Trans></button>
          </p>
        </div>
      </div>
    </div>
  </BasePage>
)

export default withTranslation()(Page)
