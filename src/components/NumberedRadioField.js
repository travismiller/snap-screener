import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

const NumberedRadioField = ({name, value, validate}) => {
  return (
    <div className="numbered">
      <Field
        name={name}
        component="input"
        type="radio"
        value={value}
        validate={validate}
      />
      <div className="state">
        <label>{value}</label>
      </div>
    </div>
  )
}

NumberedRadioField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  validate: PropTypes.func
}

NumberedRadioField.defaultProps = {
  validate: () => {}
}

export default NumberedRadioField
