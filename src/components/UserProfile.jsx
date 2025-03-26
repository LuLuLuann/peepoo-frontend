


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [bathrooms, setBathrooms] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Fetch user data from backend
        const fetchUserData = async () => {
            const response = await fetch("/api/user/profile");
            const data = await response.json();
            setUser(data.user);
            setBathrooms(data.bathrooms);
            setFavorites(data.favorites);
            setComments(data.comments);
        };

        fetchUserData();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            {user && (
                <div className="space-y-4">
                    <div>
                        <h2 className="font-semibold">Login Information:</h2>
                        {/* Username: ____ --- link to "update username" */}
                        <p>Username: {user.username} <Link to="/update-username" className="text-blue-500">(Update username)</Link></p>
                        {/* Password: **** (can't see) --- link to "update password" */}
                        <p>Password: **** <Link to="/update-password" className="text-blue-500">(Update password)</Link></p>
                    </div>

                    <div>
                        <h2 className="font-semibold">Home Location:</h2>
                        {/* Add home location: ______ (optional field that will allow them to instantly display bathrooms at that location) */}

                        <input type="text" placeholder="Enter home location" className="border p-2 rounded w-full" />
                    </div>

                    <div>
                        <h2 className="font-semibold">Your Bathrooms:</h2>
                        {/* Add a new bathroom (link to the form)
bathroom 1 they have added
bathroom 2 they have added
bathroom 3 they have added */}
                        <Link to="/add-bathroom" className="text-blue-500">(Add a new bathroom)</Link>
                        <ul>
                            {bathrooms.map((bathroom) => (
                                <li key={bathroom.id}>{bathroom.name}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold">Favorite Bathrooms:</h2>
                        {/* FAVORITE BATHROOMS:
location 1 (hyperlinked so they can go to the bathroom profile easily) --- // full CRUD
location 2 (hyperlinked so they can go to the bathroom profile easily)
location 3 (hyperlinked so they can go to the bathroom profile easily) */}
                        <ul>
                            {favorites.map((fav) => (
                                <li key={fav.id}>
                                    <Link to={`/bathroom/${fav.id}`} className="text-blue-500">{fav.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold">Comment History:</h2>
                        {/* Comment History:
            Comment 1 here (hyperlinked so they can go to the comment on that bathroom profile easily)
            Comment 2 here (hyperlinked so they can go to the comment on that bathroom profile easily)
            Comment 3 here (hyperlinked so they can go to the comment on that bathroom profile easily) */}
                        <ul>
                            {comments.map((comment) => (
                                <li key={comment.id}>
                                    <Link to={`/bathroom/${comment.bathroomId}#comment-${comment.id}`} className="text-blue-500">
                                        {comment.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default UserProfile;