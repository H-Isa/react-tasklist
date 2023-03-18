import { useState } from "react";
import Profile from "./Profile";


const Search = () => {

    const [searchProfile, setsearchProfile] = useState("");
    const [profile, setprofile] = useState(null)
    const [error, seterror] = useState(null)

    const handleSearch = (e)=>{
        e.preventDefault()

        if (searchProfile === "") {
            seterror(true)
            setprofile(null)
        } else {
                seterror(null)
                fetch(`https://api.github.com/users/${e.target.value}`)
                .then(response => response.json())
                .then(data=>{
                    if (data.message === 'Not Found') {
                        seterror("User not found")
                        setprofile(null)
                    } else {
                        setprofile(data)
                    }
                })
                 .catch(err=>seterror(err.message))
            }
    }

    return ( 
        <div className="container">
            <nav className="header">
                    <a href="#" className="header-title">GitHub Finder</a>
            </nav>

            <div className="searchContainer">
                <div className="search-card">
                    <h1>Search GitHub Users</h1>
                    <p className="lead">Enter a username to fetch a user profile and repos</p>
                    <input  type="text" 
                            id="searchUser" 
                            className="search-input" 
                            placeholder="GitHub Username..." 
                            value={searchProfile} 
                            onChange={(e)=>setsearchProfile(e.target.value)}
                            onKeyUp={handleSearch}/>
                </div>
    
                <div id="profile"></div>
            </div>
 
            {profile && <Profile profile={profile}/>}  
            {error && <p>{error}</p>}

            <footer className="footer">
                GitHub Finder &copy;
            </footer>

        </div>
     );
}
 
export default Search;