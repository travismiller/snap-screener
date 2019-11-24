import React from 'react'
import { Field } from 'react-final-form'
import { withTranslation, Trans } from 'react-i18next';
import { withRouter } from 'react-router-dom'

import Address from './Address'
import Wizard from './Wizard'
import FiveNumberedRadioFields from './FiveNumberedRadioFields'
import SelectField from './SelectField'
import { Error, required } from './Error'

import iconFamily from '../img/icons/family.svg'
import iconPhone from '../img/icons/phone.svg'
import iconArrowLeft from '../img/icons/arrow-left.svg'
import iconArrowRight from '../img/icons/arrow-right.svg'

import { default as schools } from '../data/schools'

import { default as axios } from 'axios'

// const required = value => (value ? undefined : <Trans>Required</Trans>)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = (history) => {
  return async (values) => {
    await sleep(300)

    // axios.post('/.netlify/functions/form-submit', values)
    axios.post('/api/form-submit', values)
      .then(function (response) {
        // console.log({ history, response })
        switch (response.data.eligibility) {
          case 'eligible':
            history.push('/eligible')
          break
          case 'ineligible':
            history.push('/ineligible')
          break
          default:
            // ?
          break
        }
      })
      .catch(function (error) {
        // console.log({ history, error })
      })
  }
}

const Form = ({ t, history }) => (
  <Wizard
    initialValues={{}}
    onSubmit={onSubmit(history)}
    showInputPreview={false}
    showPrevious={true}
    previousText={
      <div className="flex">
        <div className="flex-shrink">
          <img alt="" src={iconArrowLeft} className="inline-block h-8 -mt-1 -ml-2" />
        </div>
        <div className="flex-grow"><Trans>Previous</Trans></div>
      </div>
    }
    nextText={
      <div className="flex">
        <div className="flex-grow"><Trans>Next</Trans></div>
        <div className="flex-shrink">
          <img alt="" src={iconArrowRight} className="inline-block h-8 -mt-1 -mr-2" />
        </div>
      </div>
    }
    submitText={<span><Trans>Submit</Trans> <img alt="" src={iconArrowRight} className="icon right" /></span>}
  >
    <Wizard.Page>
      <div className="flex my-4">
        <h2 className="flex-1"><Trans>Tell us about your household size.</Trans></h2>
        <div className="flex-shrink"><img alt="" src={iconFamily} className="h-24" /></div>
      </div>

      <div className="px-4">
        <div className="my-4">
          <div className="text-xl leading-tight"><Trans>How many children <b>under the age of 18</b> live in your home?</Trans></div>

          <FiveNumberedRadioFields name="howManyChildrenUnder18" validate={required} startIndex={1} />

          <div>
            <Error name="howManyChildrenUnder18" />
          </div>
        </div>

        <div className="my-4">
          <div className="text-xl leading-tight"><Trans>How many adults <b>18 and over</b> live in your home? <small className="whitespace-no-wrap text-xs">Including you.</small></Trans></div>

          <FiveNumberedRadioFields name="howManyAdults" validate={required} startIndex={1} />

          <div>
            <Error name="howManyAdults" />
          </div>
        </div>

        <div className="my-4">
          <div className="text-xl leading-tight"><Trans>How many adults <b>over the age of 60</b> live in your home?</Trans></div>

          <FiveNumberedRadioFields name="howManyAdultsOver60" validate={required} startIndex={0} />

          <div>
            <Error name="howManyAdultsOver60" />
          </div>
        </div>
      </div>

    </Wizard.Page>

    <Wizard.Page>
      <div className="flex my-4">
        <div className="flex-1">
          <h2>
            <Trans>What is your household income?</Trans>
          </h2>
          <p>
            <Trans>
              To find out if you’re eligible for food assistance, we need to know about your
              household income. Let us know the total income you receive from your job, or if you’re
              self-employed, or any income from other benefits such as Social Security, TANF, WIC,
              or any other sources. For example, you can indicate that you receive $200 per week. Or
              $800 per month.
            </Trans>
          </p>
        </div>
        <div className="flex-shrink"><img alt="" src={iconFamily} className="h-24" /></div>
      </div>

      <div className="flex">
        <div className="">
          <div className="relative">
            ${' '}<Field
              name="income.amount"
              component="input"
              type="number"
              className="text-right w-16 h-8"
              format={value => (value ? value.replace(/[^\d]/g, '') : '')}
              pattern="\d*"
              step="1"
              validate={required}
              autoFocus
            />{' '}.00
            <span className="mx-4">{' '}/{' '}</span>
          </div>
          <div>
            <Error name="income.amount" />
          </div>
        </div>
        <div className="">
          <SelectField
            name="income.period"
            component="select"
            className="w-32 h-8"
            validate={required}
          >
            <option value=""></option>
            <option value="yearly">{t('Year')}</option>
            <option value="monthly">{t('Month')}</option>
            <option value="weekly">{t('Week')}</option>
            <option value="2-weeks">{t('2 weeks')}</option>
          </SelectField>
          <div>
            <Error name="income.period" />
          </div>
        </div>
      </div>
    </Wizard.Page>

    <Wizard.Page>
      <div className="flex my-4">
        <div className="flex-1">
          <h2>
            <Trans>Let us know how we can get in touch with you.</Trans>
          </h2>
        </div>
        <div className="flex-shrink"><img alt="" src={iconPhone} className="h-24" /></div>
      </div>

      <Address name="address" />
    </Wizard.Page>

    <Wizard.Page>
      <div className="flex my-4">
        <div className="flex-1">
          <h2>
            <Trans>Please select a school you are associated with:</Trans>
          </h2>
        </div>
        <div className="flex-shrink"><img alt="" src={iconPhone} className="h-24" /></div>
      </div>

      <div>
        <div className="inline-block">
          <SelectField
            name="childAttendsSchool"
            className="w-64"
            validate={required}
          >
            <option key="" value=""></option>
            {schools.map((x, i) => <option key={x} value={x}>{x}</option> )}
          </SelectField>
        </div>

        <p>
          <Error name="childAttendsSchool" />
        </p>
      </div>
    </Wizard.Page>
  </Wizard>
)

export default withTranslation()(withRouter(Form))