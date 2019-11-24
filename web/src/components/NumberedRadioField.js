import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

const NumberedRadioField = ({name, value, label, validate, className}) => {
  return (
    <div className={('numbered ' + className).trim()}>
      <Field
        name={name}
        component="input"
        type="radio"
        value={value}
        validate={validate}
      />
      <div className="state">
        <label>{label ? label : value}</label>
      </div>
    </div>
  )
}

NumberedRadioField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.any,
  validate: PropTypes.func
}

NumberedRadioField.defaultProps = {
  className: '',
  validate: () => {}
}

export default NumberedRadioField
