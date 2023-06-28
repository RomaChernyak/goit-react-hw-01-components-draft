import FriendListItem from "components/FriendList/FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends} />
        </ul>
    );
};

export default FriendList;