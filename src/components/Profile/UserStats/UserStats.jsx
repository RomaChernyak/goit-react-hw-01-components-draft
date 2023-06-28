import PropTypes from 'prop-types';

const UserStats = (
    { user:
        { stats: { followers, likes, views }, },
    }
) => {
    return (
        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    )
};

UserStats.propTypes = {
    user: PropTypes.shape({
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
        }),
    }),
};

export default UserStats;