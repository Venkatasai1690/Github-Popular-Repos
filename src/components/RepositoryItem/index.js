// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryData} = props

  return (
    <li className="repository-item-container">
      <img
        className="card-item-image"
        src={repositoryData.imageUrl}
        alt={repositoryData.name}
      />
      <h1 className="repo-name">{repositoryData.name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stats-icon"
        />
        <p className="stats-text">{repositoryData.starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stats-icon"
        />
        <p className="stats-text">{repositoryData.forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open-issues"
          className="stats-icon"
        />
        <p className="stats-text">{repositoryData.issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
