import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl} = appItemDetails

  return (
    <li className="appList_item">
      <img src={imageUrl} alt={appName} className="appImage" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
