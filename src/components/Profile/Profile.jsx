import UserDescription from './UserDescription/UserDescription';
import UserStats from './UserStats/UserStats';

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <UserDescription user={user} />

            <UserStats user={user} />
        </div>
    )
};

export default Profile;