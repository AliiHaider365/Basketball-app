import React from 'react'
import './com.css'
import AboutCom from '../coponent/Ab-com'

export default class About extends React.Component{
    render = () => {
        return <div className="containerH">
            <div className='contpage aboutpage' >
                <h3 className="heading head2">About us</h3>
            </div>

        <AboutCom />
           
    </div>
}
}
