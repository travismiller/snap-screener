import React from 'react'
import { withTranslation, Trans } from 'react-i18next';
import logo from '../img/tulsa-public-schools-logo.svg';

const Footer = () => (
  <footer>
    <p><img className="h-8 mx-auto" alt="" src={logo} /></p>
    <p><Trans>Special thanks to Tulsa Public Schools for their support and partnership on this project. The Supplemental Nutrition Assistance Program (SNAP) is a federal program, administered by the office of the Oklahoma Department of Human Services (OKDHS). For mor information about OKDHS, visit <a href="http://www.okdhs.org/">okdhs.org</a> or call (877) 751-2972.</Trans></p>
  </footer>
)

export default withTranslation()(Footer)
