import PropTypes from 'prop-types';

const UserDescription = (
    { user:
        { username, tag, location, avatar }
    }
) => {
    return (
        <div className="description">
            <img
                src={avatar}
                alt={username}
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
    )
};

UserDescription.propTypes = {
    user: PropTypes.shape(
        {
            avatar: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
    }),
};

export default UserDescription;