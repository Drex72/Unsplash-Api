import React, { Component } from 'react'
import './ImageHandler.css'

export default class ImageHandler extends Component {
render() {
    const pictures = this.props.pics

    return (
        <div className='flex' >
            {pictures.map((term) => (

                        <div ><img src={term.urls.small} alt="" /></div>
                    ))}
        </div>
    )
}
}
