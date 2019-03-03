import React from 'react'
import { Image } from 'semantic-ui-react'


function mugshot(props) {

    return (
        <div className="img">
        <Image src={props.photo} size='medium' circular/>
        </div>
    )
}

export default mugshot
