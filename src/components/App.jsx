import axios from 'axios'
import React from 'react'
import SearchBar from './SearchBar'
import ImageHandler from './ImageHandler'
import Guestlist from '../hooks/Guestlist'
/* class App extends React.Component {
    // We use callbacks to pass state from child component to parent component
    constructor() {
        super()
        this.state = {pictures: []}
    }
    onTermSubmit = (term, clientId, result) => {
            const url = "https://api.unsplash.com/search/photos?page=1&query="+term+"&client_id="+clientId
            axios.get(url)
            .then((response) => {
                result = response.data.results
                this.setState({pictures: result})
            })
    }

    

    render() {
        // Then we pass the callback to the child component as a property(props)
        return <div>
                    <SearchBar onTermSubmit={this.onTermSubmit} />
                    <ImageHandler pics={this.state.pictures} />
                </div>;
    }
}
 */

const App = () => {
  return <div>Hello World</div>
}

export default App
