import './index.css'

const GreetingShowImage = props => {
  const {languageGreetingsList, isActive} = props
  const findImage = languageGreetingsList.find(each => each.id === isActive)
  const {imageAltText, imageUrl} = findImage
  return (
    <>
      <img src={imageUrl} alt={imageAltText} className="image-show" />
    </>
  )
}
export default GreetingShowImage
