import React from 'react'
import NumberedRadioField from './NumberedRadioField'

const FiveNumberedRadioFields = (props) => (
  <div className="flex flex-wrap justify-center">
    <div className="flex-no-wrap">
      <NumberedRadioField {...props} value="1" />
      <NumberedRadioField {...props} value="2" />
      <NumberedRadioField {...props} value="3" />
    </div>
    <div className="flex-no-wrap">
      <NumberedRadioField {...props} value="4" />
      <NumberedRadioField {...props} value="5+" />
    </div>
  </div>
)

FiveNumberedRadioFields.propTypes = NumberedRadioField.propTypes

FiveNumberedRadioFields.defaultProps = NumberedRadioField.defaultProps

export default FiveNumberedRadioFields
