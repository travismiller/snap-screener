import React, { useState } from 'react'
import contacts, { default as schoolContacts } from '../data/contacts'

const SchoolContactContext = React.createContext({})
const SchoolContactContextConsumer = SchoolContactContext.Consumer

function SchoolContactContextProvider(props) {
  const [selectedSchoolContact, setSelectedSchoolContact] = useState(null)

  function setSelectedSchoolContactBySchool(school) {
    const contact = contacts.find(contact => contact.school === school)

    return setSelectedSchoolContact(contact)
  }

  return (
    <SchoolContactContext.Provider value={ {selectedSchoolContact, setSelectedSchoolContactBySchool} }>
      {props.children}
    </SchoolContactContext.Provider>
  )
}

function schoolContactOptions() {
  return contacts.map(contact => contact.school)
                 .map(school => <option key={school} value={school}>{school}</option>)
}

export {
  SchoolContactContext,
  SchoolContactContextConsumer,
  SchoolContactContextProvider,
  schoolContacts,
  schoolContactOptions,
}
export default SchoolContactContext
