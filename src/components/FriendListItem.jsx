import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({
                avatar,
                name,
                isOnline,
                id
            }) => {
                return (
                    <li className="item" key={id}>
                        <span className="status">{isOnline}</span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                );
            })}
        </ul>
    );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};

export default FriendListItem;