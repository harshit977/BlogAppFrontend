import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const Loading = () => {
    return(
        <div className="col-12" style={{marginTop:50}}>
            <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span>
        </div>
    );
}