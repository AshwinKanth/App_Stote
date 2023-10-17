import './index.css'

const TabItem = props => {
  const {tabItemDetails, onClickTabItem, onActiveTab} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  const activeTab = onActiveTab ? 'activeTab' : 'noActiveTab'

  return (
    <li className="tabList_item">
      <button
        className={`tabButton ${activeTab}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
