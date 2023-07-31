import './index.css'

const SearchItem = props =>{
            const {eachItem} = props
            const {title, description,link} = eachItem
      return (
     <li>
            <a className='result-title' href={link} rel='noreferrer' target="_blank">{title}</a><br/>
            <a className='result-url' href={link} rel='noreferrer' target="_blank">{link}</a>
            <p className='link-description'>{description}</p>
      </li>
      )
}


export default SearchItem