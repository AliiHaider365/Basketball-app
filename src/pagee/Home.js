import React from 'react'
import './com.css'
import Team from './Team'
import Tournament from './Tournament'
import AboutCom from '../coponent/Ab-com'

export default class About extends React.Component{
    render = () => {
        return <div>
            <div className='containerH'>
                <div className="head">
                    <h1 >
                        are yoy ready <br /> to become the
                        <br /> best? <br />
                    </h1>
                </div>
                <Team />
                <Tournament />
                <AboutCom />
                
            </div>
    </div>
}
}
