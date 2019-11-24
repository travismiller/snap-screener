import React from 'react'
import { withTranslation, Trans } from 'react-i18next'

const ContactInformation = withTranslation()(() => (
  <div>
    <p>
      <b className="text-lg">Jennifer Moreno</b><br />
      Mayo Demonstration School<br />
      (918) 925-1500<br />
      <a href="mailto:morenje@tulsaschools.org">morenje@tulsaschools.org</a>
    </p>
  </div>
))

export { ContactInformation }
export default ContactInformation
