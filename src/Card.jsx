import profilePic from './assets/profile.jpeg'

function Card() {
    return(
        <div className="card">
            <img className= "card-image"src={profilePic} alt="profile pic" />
            <h2 className='card-title'>Ishan</h2>
            <p className='card-text'>Currently studying, designing</p>
        </div>
    );
}

export default Card