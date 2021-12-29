import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//POSTS BLL
let posts = [
    {
        id: 1,
        theme: "How become a Project Manager? 5 steps for it.",
        postText: "Project managers organize teams of people to accomplish a specific goal, or project, for companies and other organizations. If you’re organized, intrigued by people, and ready to take on a larger role in your career, project management might be a good fit.",
        profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
        likesCount: "199",
    },
    {
        id: 2,
        theme: "My way to Front-End Development.",
        postText: "Lorem10",
        profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
        likesCount: "80",
    },
    {
        id: 3,
        theme: "What kind of coffee I like to drink?",
        postText: "Lorem10",
        profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
        likesCount: "91",
    }, {
        id: 4,
        theme: "What kind of coffee I like to drink?",
        postText: "Lorem10",
        profileImg: "https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
        likesCount: "90",
    },
]


//PROFILE BLL
let profileInfoData =
    {
        name: "Bekzod",
        sureName: "Kholdarov",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, minus!",
        profilePhoto:"https://i.pinimg.com/originals/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg",
        profileBg:"https://images.unsplash.com/photo-1636956040469-fec02ed01ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJnJTIwc29jaWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    };

//DIALOGS BLL
let dialogs = [
    {id: 1, name: "Zohid", userPhoto:"https://cdn-icons-png.flaticon.com/512/147/147140.png"},
    {id: 2, name: "Kamron", userPhoto:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"},
    {id: 3, name: "Qaxramon", userPhoto:"https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png"},
    {id: 4, name: "Zoyir", userPhoto:"https://www.oneeducation.org.uk/wp-content/uploads/2020/06/cool-profile-icons-69.png"}
];
let messages = [
    {id: 1, messageText: "Assalomu Aleykum!"},
    {id: 2, messageText: "Vaaleykum Assalom!"},
    {id: 3, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
    {id: 4, messageText: "Assalomu Aleykum"},
    {id: 5, messageText: "Zoyir"},
    {id: 6, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
    {id: 7, messageText: "Assalomu Aleykum! Assalomu Aleykum!"},
    {id: 8, messageText: "Assalomu Aleykum! Assalomu Aleykum!"}
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} profileInfoData={profileInfoData} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
