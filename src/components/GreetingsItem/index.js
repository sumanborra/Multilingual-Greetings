import './index.css'
const GeetingsItem = props => {
  const {languageGreetingsList, isActive, isActiveButtonChanged} = props
  const {buttonText, id} = languageGreetingsList
  const buttonColor = isActive === id ? 'active-color' : ''

  const changeButton = () => {
    isActiveButtonChanged(id)
  }
  return (
    <li>
      <button
        type="button"
        className={`buttn ${buttonColor}`}
        onClick={changeButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default GeetingsItem
