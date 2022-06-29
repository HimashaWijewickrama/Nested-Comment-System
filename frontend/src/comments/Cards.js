import React, { Component } from 'react';
import ImageView from './ImageView';
import img1 from '../assets/rose2.jpg';


class Cards extends Component{
    render(){
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <ImageView imgsrc={img1} title="Garden Rose"/>
                    </div>
                   
                </div>
            </div>
        );
    }
}
export default Cards;