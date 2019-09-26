import React from 'react'
import { Field } from 'react-final-form'
import { withTranslation, Trans } from 'react-i18next';

import Address from './Address'
import Wizard from './Wizard'
import FiveNumberedRadioFields from './FiveNumberedRadioFields'
import { Error, required } from './Error'

import { default as schools } from '../data/schools'

// const required = value => (value ? undefined : <Trans>Required</Trans>)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  console.log(schools)
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

// const Error = ({ name }) => (
//   <Field
//     name={name}
//     subscribe={{ touched: true, error: true }}
//     render={({ meta: { touched, error } }) =>
//       touched && error ? <span className="error">{error}</span> : null
//     }
//   />
// )

const Form = ({ t }) => (
  <Wizard
    initialValues={{}}
    onSubmit={onSubmit}
    showInputPreview={false}
    showPrevious={true}
    previousText={<span>« <Trans>Previous</Trans></span>}
    nextText={<span><Trans>Next</Trans></span>}
    submitText={<Trans>Submit</Trans>}
    >
    <Wizard.Page>
      <div>
        <h2><Trans>Tell us some information about the members of your family.</Trans></h2>
        <p>
          <label><Trans>Who is the head of your household?</Trans></label>
        </p>
        <div>
          <Field
            className="text-center"
            name="hoh.name"
            component="input"
            type="text"
            validate={required}
            autoFocus
          />
        </div>
        <Error name="hoh.name" />
      </div>
    </Wizard.Page>

    <Wizard.Page>
      <div>
        <h2><Trans>Does the head of household have a Social Security Number?</Trans></h2>

        <div className="pretty p-default p-round">
          <Field
            name="hoh.has_ssn"
            component="input"
            type="radio"
            value="yes"
            validate={required}
          />
          <div className="state">
            <label><Trans>Yes</Trans></label>
          </div>
        </div>

        <div className="pretty p-default p-round">
          <Field
            name="hoh.has_ssn"
            component="input"
            type="radio"
            value="no"
            validate={required}
          />
          <div className="state">
            <label><Trans>No</Trans></label>
          </div>
        </div>

        <div className="pretty p-default p-round">
          <Field
            name="hoh.has_ssn"
            component="input"
            type="radio"
            value="decline"
            validate={required}
          />
          <div className="state">
            <label><Trans>I prefer not to answer</Trans></label>
          </div>
        </div>

        <p>
          <Error name="hoh.has_ssn" />
        </p>
      </div>
    </Wizard.Page>

    <Wizard.Page>
      <div>
        <h2><Trans>What is your household income?</Trans></h2>

        <div>
          $<Field
            name="income.amount"
            component="input"
            type="number"
            className="text-right w-16"
            format={value => (value ? value.replace(/[^\d]/g, '') : '')}
            pattern="\d*"
            step="1"
            validate={required}
            autoFocus
          />.00
          <span className="mx-4">{' '}/{' '}</span>
          <div className="inline-block">
            <div className="relative">
              <Field
                name="income.period"
                component="select"
                className="w-32"
                validate={required}
              >
                <option value=""></option>
                <option value="yearly">{t('Year')}</option>
                <option value="monthly">{t('Month')}</option>
                <option value="weekly">{t('Week')}</option>
                <option value="2-weeks">{t('2 weeks')}</option>
              </Field>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <p>
          <Error name="income.amount" />
          <Error name="income.period" />
        </p>
      </div>
    </Wizard.Page>

    <Wizard.Page>
      <div>
        <h2><Trans>How many adults live in your home? <small>(total adults in the home 18+ including you)</small></Trans></h2>

        <FiveNumberedRadioFields name="howManyAdults" validate={required} />

        <p>
          <Error name="howManyAdults" />
        </p>
      </div>
    </Wizard.Page>

    <Wizard.Page>
      <div>
        <h2><Trans>How many adults <u>over the age of 60</u> live in your home?</Trans></h2>

        <FiveNumberedRadioFields name="howManyAdultsOver60" validate={required} />

        <p>
          <Error name="howManyAdultsOver60" />
        </p>
      </div>
    </Wizard.Page>

    <Wizard.Page>
      <div>
        <h2><Trans>How many children <u>under the age of 18</u> live in your home?</Trans></h2>

        <FiveNumberedRadioFields name="howManyChildrenUnder18" validate={required} />

        <p>
          <Error name="howManyChildrenUnder18" />
        </p>
      </div>
    </Wizard.Page>

    <Wizard.Page>
      <div>
        <h2><Trans>Let us know how we can get in touch with you.</Trans></h2>

        <Address name="address" />
      </div>
    </Wizard.Page>

    <Wizard.Page>
      <div>
        <h2><Trans>Please select the school your child attends:</Trans></h2>

        <div className="inline-block">
          <div className="relative">
            <Field
              name="childAttendsSchool"
              component="select"
              className="w-64"
              validate={required}
            >
              <option key="" value=""></option>
              {schools.map((x, i) => <option key={x} value={x}>{x}</option> )}
            </Field>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <p>
          <Error name="childAttendsSchool" />
        </p>
      </div>
    </Wizard.Page>
  </Wizard>
)

export default withTranslation()(Form)
