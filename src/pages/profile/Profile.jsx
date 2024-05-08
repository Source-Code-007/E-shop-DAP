import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div>
            This is profile
        </div>
    );
};

export default Profile;