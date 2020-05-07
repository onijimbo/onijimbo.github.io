import React from 'react';

import Project from '../components/Project'

function Portfolio (){
    return( 
        <div class="container justify-content-center">
            <h1 id="title">Portfolio</h1>
            <div class="wrapper2">
              <br />
              <div class="row bg-light">
                <div class="col-xs-8 col-md-8 col-lg-8"> 
                    <Project />
                </div> 
            </div>
            

            </div>
        </div>    
    )
};

export default Portfolio;