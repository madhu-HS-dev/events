// Write your code here
import './index.css'

const activeRegistrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {regStatusDetails} = props

  const renderInitialView = () => (
    <p className="reg-details-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderClosedView = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="reg-closed-view-heading">Registrations Are Closed Now!</h1>
      <p className="reg-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-view-image"
      />
      <h1 className="reg-closed-view-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-registered-view-image"
      />
      <p className="yet-reg-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveRegDetails = () => {
    switch (regStatusDetails) {
      case activeRegistrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case activeRegistrationStatus.registered:
        return renderRegisteredView()
      case activeRegistrationStatus.registrationClosed:
        return renderClosedView()
      default:
        return renderInitialView()
    }
  }

  return (
    <div className="registration-details-container">
      {renderActiveRegDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
