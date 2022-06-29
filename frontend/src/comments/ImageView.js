import React from 'react';
import "../comments/ImageView.css";

const ImageView = props =>{
    return(
        <div className='card text-center shadow'>
            <div className='overflow' title='White Roses'>
                <img src={props.imgsrc} alt="Image1" className='card-img-top'/>

            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>
                    {props.title}
                </h4>
                <p className='card-text text-secondary' id="card-text">
                A rose is a woody perennial flowering plant of the genus Rosa, 
                in the family Rosaceae, or the flower it bears. 
                There are over three hundred species and tens of thousands of cultivars.
                [citation needed] They form a group of plants that can be erect shrubs, climbing,
                 or trailing, with stems that are often armed with sharp prickles.[citation needed] 
                 Their flowers vary in size and shape and are usually large and showy, 
                 in colours ranging from white through yellows and reds.

                </p>
                <a href="https://en.wikipedia.org/wiki/Rose" className='btn btn-outline-success'><h3>View More Here</h3></a>
            </div>

        </div>

    );

  

}
export default ImageView;