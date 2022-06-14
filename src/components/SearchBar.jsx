import React from "react";
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor()  {
        super()
        this.state = {term: '', clientId: 'KtUyi-S8Vt_S0ZhBGv-QmWlnQT9nziTiRZMue2zQc9o',result: []}
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
    }
    // Or with an Arrow function 
/*     onInputChange = (e) => {
        this.setState({term: e.target.value});
        console.log(this.state.term);
    } */

    onSubmitTerm = (e) => {
        e.preventDefault()
        // Then we call the props and use set the value to the value that we were given in the state
        this.props.onTermSubmit(this.state.term, this.state.clientId, this.state.result)
    }
    render () {
        return (
            <div className="searchbar">
                <form action="" onSubmit={this.onSubmitTerm}>
                    <label htmlFor="">Picture Search : </label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    
                </form>
            </div>)
    }
}
export default SearchBar