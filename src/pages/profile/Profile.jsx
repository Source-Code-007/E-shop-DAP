import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className="space-y-2">
            <h2 className="font-bold text-xl">{user?.displayName}</h2>
            <img src={user?.photoURL} alt={user?.displayName} />
            </div>
        </div>
    );
};

export default Profile;