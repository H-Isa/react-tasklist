import { Link } from "react-router-dom";

const Profile = ({profile}) => {

    return ( 
        <div className="profile-container">
            <div className="profile-image">
                <img src={profile.avatar_url} alt="" className="profile-img" />
                <a href={profile.html_url}><button className="profile-btn">View Profile</button></a>
            </div>
        <a href=""></a>
            <div className="profile-info">
                <div className="btn-list">
                    <button className="btn" id="blue">Public Repos: {profile.public_repos}</button>
                    <button className="btn" id="grey">Public Gists: {profile.public_gists}</button>
                    <button className="btn" id="green">Followers: {profile.followers}</button>
                    <button className="btn" id="aqua">Following: {profile.following}</button>
                </div>

                <div className="profile-details">
                    <p>Name: {profile.name}</p>
                    <p>Company: {profile.company}</p>
                    <p>Location: {profile.location}</p>
                    <p>Member Since: {profile.created_at}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;