import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    //console.log (props) - the console showed the different names(value) I gave to author on the index.js. So now to get it to consume the value (actually show up on the screen and not just the console log, I have to go to where I originally hard-coded the author name of Sam inside the component/app/CommentDetail), and replace it with {props.author}. (Remember that the {} signal that we are accessing a javascript variable). So whenever CommentDetail shows up on the screen, Comment Detail is going to look at that props object and then see that there is an author property in there. Then it's going to take that property author name and stick it inside the anchor tag. See below. We did the same for the rest of the data. Since we are using random stock photos from 'faker', we will not be putting the answer in a string, but in curly braces because we have to refer to a js variable. So, what use to be src={faker.image.avatar()} is now src={props.avatar}. Avatar is the variable name I gave it on index.js.
    return (
        <div className ="comment"> 
        <a href = "/" className = "avatar" >
            <img alt="avatar" src={props.avatar}/>
        </a>
           <div className = "content">
            <a href="/" className = "author">
                {props.author}
            </a>
            <div className = "metadata">
                <span className = "timeAgo">{props.timeAgo}</span>
            </div>
                <div className = "comment">{props.comment}</div>
            </div>
        </div>    
    )
}

//All files in the project are siloed off from each other. They can't access data from other files unless we link them. Creating an export statement in this file will allow other files to access it. We will create an import statement in index.js so this component can show up in the index.js app. In other words, so we can render the component inside the app.

export default CommentDetail;