import React from 'react'
import { withTranslation, Trans } from 'react-i18next'
import { default as BasePage } from '../components/Page'

const Page = () => (
  <BasePage bodyClass="ruled-headers">
    <div className="flex">
      <article className="text-left">
        <h1><Trans>You may <u>not</u> be eligible to receive SNAP benefits!</Trans></h1>
        <p><Trans>Based on the information you provided you and your family may not be eligible to receive SNAP benefits. Please know there are additional resources available to assist you and your family.</Trans></p>

        <h2><Trans>Who will contact you?</Trans></h2>
        <p><Trans>You will be contacted by a school staff member within three business days to assist you with additional resources.</Trans></p>
        <p>
          <button className="btn"><Trans>Additional Resources</Trans></button>
        </p>
      </article>
    </div>
  </BasePage>
)

export default withTranslation()(Page)
