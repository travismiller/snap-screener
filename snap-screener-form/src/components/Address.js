import React from 'react'
import { Field } from 'react-final-form'
import { withTranslation, Trans } from 'react-i18next';

const us_states = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
}

const Address = ({ name }) => (
  <React.Fragment>
    <div className="address text-left">
      <div className="flex flex-col-reverse">
        <label><Trans>Address (include apt # if applicable)</Trans></label>
        <Field
          name={`${name}.street`}
          component="textarea"
          rows="2"
          autoFocus
        />
      </div>
      <div className="flex flex-col-reverse">
        <label><Trans>City</Trans></label>
        <Field
          name={`${name}.city`}
          component="input"
        />
      </div>

      <div className="md:flex">
        <div className="flex flex-col-reverse md:flex-1">
          <label><Trans>State</Trans></label>
          <div className="relative">
            <Field name={`${name}.state`} component="select" className="w-full">
              <option value=""></option>
              {Object.keys(us_states).map((x, i) => <option value={x}>{us_states[x]}</option> )}
            </Field>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-1 md:ml-12">
          <label><Trans>Zip</Trans></label>
          <Field
            name={`${name}.zip`}
            component="input"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse">
        <label><Trans>Phone Number</Trans></label>
        <Field
          name={`${name}.phone`}
          component="input"
        />
      </div>
      <div className="flex flex-col-reverse">
        <label><Trans>Email Address</Trans></label>
        <Field
          name={`${name}.email`}
          component="input"
          type="email"
        />
      </div>
      <div>
        <p><Trans>I prefer to be contacted by:</Trans></p>
        <label>
          <Field
            name="contactPreference"
            component="input"
            type="radio"
            value="email"
          />{' '}
          <Trans>Email</Trans>
        </label>
        <label>
          <Field
            name="contactPreference"
            component="input"
            type="radio"
            value="phone"
          />{' '}
          <Trans>Phone</Trans>
        </label>
        <label>
          <Field
            name="contactPreference"
            component="input"
            type="radio"
            value="sms"
          />{' '}
          <Trans>Text Message</Trans>
        </label>
      </div>
    </div>
  </React.Fragment>
)

export default withTranslation('address')(Address)
