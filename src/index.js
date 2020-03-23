import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail' //The ./ means it is in the same directory path as index.js. so ./ tells it to look in the same folder that we are in and then look for thhe file name there.

//=============================================================
// Below I will remove all three of the comment divs inside of the "ui container comments" div and replace it with the component. All text is located at the bottom in a comment.

//Note that when we want to refer to a JS variable we use {}, but COMPONENTS are the exception to that rule. When we want to show one component inside of another, we are going to treat it as a JSX tag instead -- <  /> . The comment appears with the hard coding, which  we will change. Note that we can copy that CommentDetail component as many times as we want, so of course we don't want the hard coding. all components will have the same detail. We will fix this using the Props system. The app is the parent component and the nested components are the children. 

//Props is a system for passing data from a parent component to a child component. The goal is to communicate data from the parent to the child with the ultimate goal of customizing the child--to make sure that the content displayed on the screen is somewhat different or that the behavior of the component is different when the user interacts with it. 

//The overall goal of the component is to either show some content to the user or react to user interaction. And the overall goal of props is to customize those components(children).abs


//So the app is the parent, the components are the children, and props is the method for passing customized data to the children. A child cannot pass data to the parents through the props system directly. It can indirectly, but we will cover that later.abs

//The passing of props is done in two stages. Stage one, the parent provides the information for the child, and the second stage where the child consumes the information/makes use of the information. Using our component CommentDetail as an example, here is the syntax for providing props from parent to child: <CommentDetail author = "Sam" /> . The general syntax is this:
// <TheNameOfTheComponent name of the prop = "value of the prop"  />
// So the first step is the word author, and then we need to provide a way for the child to get access to the prop that we have provided to the component. We go to the CommentDetail file, and the prop is going to show up inside of an object that is provided as the first argument to the function (the "CommentDetail" function). And that first argument will just be called "props" but no quotes around it. 

 

const App = ()=> {
  return (
    <div className = "ui container comments">
        <CommentDetail 
            author= "Sam" 
            timeAgo= "Today at 10:00 am" 
            comment= "Cool photos!"
            avatar = {faker.image.avatar()}
        />
        <CommentDetail 
            author = "Larry" 
            timeAgo= "Today at 11:40 am"         
            comment= "You spilled Metalica wrong"
            avatar = {faker.image.avatar()}
        />
        <CommentDetail 
            author = "James" 
            timeAgo= "Today at 4:34 pm" 
            comment= "I wish I could have gone to the concert." 
            avatar = {faker.image.avatar()}
        />
        <CommentDetail 
            author = "Keanu Reeves" 
            timeAgo= "Today at 7:40 pm" 
            comment= "I love Metallica, but I love YOU more!!!"
            avatar = {faker.image.avatar()}
        />
        </div>
      )
};


ReactDOM.render(<App />, document.querySelector('#root'))
//==============================================================================
/*Notes about how to create a reusable, configurable component, to avoid the type of code in the section below this one. Comments are matched by number.
*** 1. Identify the JSX that appears to be duplicated
*** 2. Determine the purpose of that block of JSX, and think of a descriptive/meaningful name for what it does. So a good name would be Comment Detail.
*** 3. Create a new file to house this new component. It should have the same name as the component.
*** 4. Create a new component inside the new file, and paste the JSX into it.
*** 5. Make sure the new component is configurable, by using React's 'props' system.


*/

//==============================================================================
//This is the inefficient way, requiring lots of code. It was good practice to see the bad way vs the good way.

/*

const App = ()=> {
  return (
    <div className = "ui container comments">
        <div className ="comment">
*** 1.note that this section from "comment" to the end of the comment div has been duplicated three times*** 
*** 2. the purpose of this block of code is to display details about a single comment.
*** 3. I created a new file called CommentDetails.js. Usually React components are written in proper form with caps, not camel case.



            <a href = "/" className = "avatar" >
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            
            <div className = "content">
                <a href="/" className = "author">
                    Sam
                </a>
                <div className = "metadata">
                    <span className = "date">Today at 6:00 pm</span>
                </div>
                    <div className = "text">Nice blog post!</div>
                </div>
            </div>
            <div className ="comment">
            <a href = "/" className = "avatar" >
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            
            <div className = "content">
                <a href="/" className = "author">
                    Sam
                </a>
                <div className = "metadata">
                    <span className = "date">Today at 6:00 pm</span>
                </div>
                    <div className = "text">Nice blog post!</div>
                </div>
            </div>

*** 4. I created a component in the CommentDetails file with a const function of CommentDetail, and pasted that text into the return statement.

*** 5. notice that the 'author','date', and 'text are hard coded. We want to make those areas customizeable. because the info will always be different--different users, comments, etc.  

            <div className ="comment">
            <a href = "/" className = "avatar" >
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            
            <div className = "content">
                <a href="/" className = "author">
                    Sam
                </a>
                <div className = "metadata">
                    <span className = "date">Today at 6:00 pm</span>
                </div>
                    <div className = "text">Nice blog post!</div>
                </div>
            </div>
            
        </div>


      )
};




ReactDOM.render(<App />, document.querySelector('#root'))*/