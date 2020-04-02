import React, { Component } from 'react';
import ABOUT from '../assets/img2.png'


export default class AboutCom extends Component {
  render() {
    return ( <>
        <h1 className="heading">About us Page</h1>
        <div className="Aboutus">
            <div className="imginfo">
                <img  src={ABOUT} />
            </div>
            <div className="detail">
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                <br/>
                <button className='btn abBtn'>Read more</button>
            </div>
        
        </div>
        </>
    );
  }
}
