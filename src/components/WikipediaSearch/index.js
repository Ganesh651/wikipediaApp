import { Component } from "react";
import SearchItem from '../SearchItem'
// import ShareButton from "../ShareButton";
import './index.css'

class WikipediaSearch extends Component {
      state = {searchData:[]}

      // componentDidMount(){
      //       this.getSearchRsultsData()
      // }

      getSearchRsultsData = async event => {
            // const {userinput} = this.state
            console.log(event.key)
            if (event.key === "Enter"){
                  const url = "https://apis.ccbp.in/wiki-search?search=" + event.target.value
                  const response = await fetch(url)
                  const data = await response.json()
                 this.setState({searchData: data.search_results})
            }
      }

      
      // onChangeSearchInput = e =>{
      //       this.setState({userinput: e.target.value},getSearchRsultsData)
      // } 


render(){
      const {searchData} = this.state
      return (
      <div className="main-container">
        <div className="wiki-search-header text-center">
            <img className="wiki-logo" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png" alt="wikipedia"/>
            <br />
            <input onKeyDown={this.getSearchRsultsData}
            placeholder="Type a keyword and press Enter to search" 
            type="search" 
            className="search-input w-100" />
        </div>
        <ul className="search-results">
             {searchData.map(eachItem=>(
                  <SearchItem eachItem={eachItem} key={eachItem.title} />
            ))}
        </ul>
    </div>
       )
      }
}

export default WikipediaSearch