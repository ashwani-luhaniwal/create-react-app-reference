import React from 'react';

/**
 * User Profile component
 */
export default class UserProfile extends React.Component {
    render() {
        return (
            <div className="UserProfile">
                <div className="User">
                    <div className="name">Ashwani Luhaniwal</div>
                    <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" alt="profile" /></div>
                </div>
            </div>
        )
    }
}