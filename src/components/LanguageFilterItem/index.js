// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, clickLanguageFilter, isActive} = props
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguageFilter = () => {
    clickLanguageFilter(languageFilterDetails.id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        type="button"
        onClick={onClickLanguageFilter}
      >
        {languageFilterDetails.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
