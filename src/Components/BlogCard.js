import React, { Component }  from "react";
import { render } from "sass";
import HomeSvg from '../assets/Svgs/HomeSvg';

const BlogCard = (props) => {
    // state ={
    //     likeCount:0
    // }
    // onbuttonClick = () => {
    //     this.setState((prevState , prevProps) => {
    //         return{likeCount : prevState.likeCount + 1}
    //     });
    // }
    return (
        <div className="col-md-4">
        <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.description}</p>
                            <p className="card-text">{props.likeCount}</p>
                            <button className="custom-btn blue" onClick ={props.onClicklikebtn}><HomeSvg /> Like</button>
                        </div>
                    </div>
        </div>
    )
    
}

export default BlogCard;