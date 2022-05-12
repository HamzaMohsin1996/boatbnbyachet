import React, { Component } from 'react';
 import BlodCard from './BlogCard';

class BlogPost  extends Component {
    state = {
        BlogDetails : [
            {
                id:0,
                title: "Blog Post Title 1",
                description :"With supporting text below as a natural lead-in to additional content.",
                likeCount:10,
               
            },
            {
                id:1,
                title: "Blog Post Title 2",
                description :"With supporting text below as a natural lead-in to additional content.",
                likeCount:20,
            
            },
            {
                id:2,
                title: "Blog Post Title 3",
                description :"With supporting text below as a natural lead-in to additional content.",
                likeCount:30,
              
            },
        ]
    }
    
      likeButtonClicked = (pos) => {
          const updatedBlogList = this.state.BlogDetails;
          const updatedList = updatedBlogList[pos];
          updatedList.likeCount = updatedList.likeCount + 1; 
          updatedBlogList[pos] = updatedList;
          this.setState({BlogDetails: updatedBlogList});
        //   console.log(updatedList);
        // alert("Button CLicked" + pos);
    }

    render()   {
        // console.log(this.state.BlogDetails)
      
        return(
           
            <>
            <div className="section-padding">
                <h2>Blog Posts</h2>
                <div className="row section-padding">
                        {this.state.BlogDetails.map((item , pos) => {return(<BlodCard name={item.title} description={item.description} key={item.id}   likeCount={item.likeCount} onClicklikebtn={() => this.likeButtonClicked(pos)}/>)})}
                </div>
            </div>
            </>
        )
    }
   
}

export default BlogPost;