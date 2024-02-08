import './index.css'

const Tabs = props => {
  const {tabDetails, isSelected, changeTab} = props
  const {tabId, displayText} = tabDetails
  const selectedTab = isSelected ? 'selected-tab' : ''

  const tabClicked = () => {
    changeTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${selectedTab}`}
        onClick={tabClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
