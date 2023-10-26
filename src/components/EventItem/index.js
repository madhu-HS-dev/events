// Write your code here
import './index.css'

const EventItem = props => {
  const {eventData, onClickItem} = props
  const {id, imageUrl, name, location} = eventData
  const onClickEvent = () => {
    onClickItem(id)
  }
  return (
    <>
      <li className="event-item-container">
        <button type="button" className="button" onClick={onClickEvent}>
          <img src={imageUrl} alt="event" className="image-url" />
        </button>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </li>
    </>
  )
}

export default EventItem
