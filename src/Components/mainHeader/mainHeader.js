import './mainHeader.css'
import userIcon from '../../images/svg/user.svg'
import search from '../../images/svg/search.svg'

function MainHeader() {
  return (
    <div className="header">
      <header className="main-header">
        <div className="main-header-logo">
          <h1>Ecommerly</h1>
        </div>

        <div className='main-header-search'>
          <img src={search} alt='search'/>
          <input type='text' className='header-search-input'/>
        </div>

        <div className="main-header-items">
          <ul>
            <li>
              <p>Produtos</p>
            </li>
            <li>
              <p>Carinho</p>
            </li>
            <li>
              <p>Sobre</p>
            </li>
            <li>
              <img src={userIcon} alt='user'></img>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;