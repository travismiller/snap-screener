import React from 'react'
import { Field } from 'react-final-form'
import { withTranslation, Trans } from 'react-i18next';

import { Error, required } from './Error'

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
        <label><Trans>Address (include apt # if applicable)</Trans> <Error name={`${name}.street`} /></label>
        <Field
          name={`${name}.street`}
          component="input"
          type="text"
          validate={required}
          autoFocus
        />
      </div>

      <div className="flex flex-col-reverse">
        <label><Trans>City</Trans> <Error name={`${name}.city`} /></label>
        <Field
          name={`${name}.city`}
          component="input"
          type="text"
          validate={required}
        />
      </div>

      <div className="sm:flex">
        <div className="sm:flex-1">
          <div className="flex flex-col-reverse">
            <label><Trans>State</Trans> <Error name={`${name}.state`} /></label>
            <div className="relative">
              <Field
                name={`${name}.state`}
                component="select"
                className="w-full"
                validate={required}
              >
                <option value=""></option>
                {Object.keys(us_states).map((x, i) => <option value={x}>{us_states[x]}</option> )}
              </Field>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex-1 sm:ml-12">
          <div className="flex flex-col-reverse">
            <label><Trans>Zip</Trans> <Error name={`${name}.zip`} /></label>
            <Field
              name={`${name}.zip`}
              component="input"
              type="text"
              validate={required}
              pattern="\d{5}(-\d{4})?"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse">
        <label><Trans>Phone Number</Trans> <Error name={`${name}.phone`} /></label>
        <Field
          name={`${name}.phone`}
          component="input"
          type="text"
          validate={required}
        />
      </div>

      <div className="flex flex-col-reverse">
        <label><Trans>Email Address</Trans> <Error name={`${name}.email`} /></label>
        <Field
          name={`${name}.email`}
          component="input"
          type="email"
          validate={required}
        />
      </div>

      <div>
        <p><Trans>I prefer to be contacted by: <Error name={`${name}.contactPreference`} /></Trans></p>

        <div className="pretty p-default p-round">
          <Field
            name={`${name}.contactPreference`}
            component="input"
            type="radio"
            value="email"
            validate={required}
          />
          <div className="state">
            <label><Trans>Email</Trans></label>
          </div>
        </div>

        <div className="pretty p-default p-round">
          <Field
            name={`${name}.contactPreference`}
            component="input"
            type="radio"
            value="phone"
            validate={required}
          />
          <div className="state">
            <label><Trans>Phone</Trans></label>
          </div>
        </div>

        <div className="pretty p-default p-round">
          <Field
            name={`${name}.contactPreference`}
            component="input"
            type="radio"
            value="sms"
            validate={required}
          />
          <div className="state">
            <label><Trans>Text Message</Trans></label>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default withTranslation('address')(Address)
