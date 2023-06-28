import PropTypes from 'prop-types';

const Stats = ({ data }) => {
    return (
        <ul className="stat-list">
            {data.map(({ id, label, percentage }) => {
                return (
                    <li key={id}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                );
            })}
        </ul>
    );
};

Stats.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

export default Stats;