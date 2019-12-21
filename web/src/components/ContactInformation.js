import React, { useContext } from 'react'
import { withTranslation } from 'react-i18next'
import SchoolContactContext from '../contexts/SchoolContactContext'

function ContactInformation(props) {
  const { selectedSchoolContact } = useContext(SchoolContactContext)

  if (!selectedSchoolContact) {
    return null
  }

  return (
    <div>
      <p>
        <b className="text-lg">{ `${selectedSchoolContact.firstName} ${selectedSchoolContact.lastName}` }</b><br />
        {selectedSchoolContact.school}<br />
        {selectedSchoolContact.phone}<br />
        <a href={`mailto:${selectedSchoolContact.email}`}>{selectedSchoolContact.email}</a>
      </p>
    </div>
  )
}

export { ContactInformation }
export default withTranslation()(ContactInformation)
