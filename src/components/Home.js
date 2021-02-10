import React from 'react'
import '../App.css'

const Home = (props) => {
    return (
        <div>
            <div className='imgContainer'>
                <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--7y7OVurK--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://i1.wp.com/blog.mallow-tech.com/wp-content/uploads/2016/12/user-authentication.jpg%3Fresize%3D820%252C400' alt='user-authentication' className='logo'/>
            </div>
            <div className='content'>
                <div className='leftContent'>
                    <p>
                        <b>
                            User authentication is a security process that covers all of the human-to-computer interactions that require the user to register and log in. Said more simply, authentication asks each user, “who are you?” and verifies their response.
                        </b>
                    </p>
                </div>
                <div className='rightContent'>
                    <p>
                        <b>
                            How do I authenticate a user?<br />
                            The process is fairly simple, users input their credentials on the website's login form. That information is then sent to the authentication server where the information is compared with all the user credentials on file. When a match is found, the system will authenticate users and grant them access to their accounts
                        </b>
                    </p>
                </div>
            </div>
        </div>
        
        
    )
}

export default Home
