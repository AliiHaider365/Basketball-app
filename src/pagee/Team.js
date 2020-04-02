import React from 'react';
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'
import Img4 from '../assets/img4.png'

class Team extends React.Component {
    state = {
        players:[
            {
                name: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                src: Img1
            },
            {
                name: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                src:Img2
            },
            {
                name: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                src:Img3
            },
            {
                name: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                src:Img4
            },
        ]
    }
    render() {
        return (
            <div className="containerH" >
                
                <h1 className="heading"> Our Team </h1>
                <div className="contain">
                    {this.state.players.map((item) => {

                        return <div className="playerInfo">
                        <div className="imgContainer">
                                <img src={item.src} />
                        </div>
                            <div className="contentContainer">
                               <span>{item.name}</span> 
                            </div>

                    </div>
                    })}

                </div>
            </div>
        );
    }
}

export default Team;
