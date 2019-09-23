import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import { useTranslation } from 'react-i18next';

export const WizardFunction = (props) => {
  const { t } = useTranslation();

  // state
  const [page, changePage] = React.useState(0)
  const [values, changeValues] = React.useState(props.initialValues || {})

  const activePage = () => React.Children.toArray(props.children)[page]

  const isLastPage = () => page === React.Children.count(props.children) - 1

  const next = (values) => {
    changePage(Math.min(page + 1, props.children.length - 1))
    changeValues(values)
  }

  const previous = () => {
    changePage(Math.max(page - 1, 0))
  }

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  const validate = (values) => {
    const active_page = activePage()

    return active_page.props.validate ? active_page.props.validate(values) : {}
  }

  const handleSubmit = (values) => {
    if (isLastPage()) {
      return props.onSubmit(values)
    } else {
      next(values)
    }
  }

  return (
    <Form
      initialValues={values}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          {activePage()}

          <div className="buttons">
            {page > 0 && (
              <button className="btn" type="button" onClick={previous}>
                « {t('Previous')}
              </button>
            )}
            {!isLastPage() && <button className="btn" type="submit">{t('Next')} »</button>}
            {isLastPage() && (
              <button className="btn" type="submit" disabled={submitting}>
                {t('Submit')}
              </button>
            )}
          </div>

          <pre className="input-preview"><code>{JSON.stringify(values, 0, 2)}</code></pre>
        </form>
      )}
    </Form>
  )
}
WizardFunction.Page = ({ children }) => children

export class WizardClass extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  static Page = ({ children }) => children

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues || {}
    }
  }
  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }))

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }))

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  handleSubmit = values => {
    const { children, onSubmit } = this.props
    const { page } = this.state
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values)
    } else {
      this.next(values)
    }
  }

  render() {
    const { children } = this.props
    const { page, values } = this.state
    const activePage = React.Children.toArray(children)[page]
    const isLastPage = page === React.Children.count(children) - 1

    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            {activePage}

            <div className="buttons">
              {page > 0 && (
                <button className="btn" type="button" onClick={this.previous}>
                  « Previous
                </button>
              )}
              {!isLastPage && <button className="btn" type="submit">Next »</button>}
              {isLastPage && (
                <button className="btn" type="submit" disabled={submitting}>
                  Submit
                </button>
              )}
            </div>

            <pre><code>{JSON.stringify(values, 0, 2)}</code></pre>
          </form>
        )}
      </Form>
    )
  }
}

// const Wizard = WizardClass
const Wizard = WizardFunction

export default Wizard
