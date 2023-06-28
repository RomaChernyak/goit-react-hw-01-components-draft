// import PropTypes from 'prop-types';
import Title from './Title/Title';
import Stats from './Stats/Stats';

const Statistics = ({ data, title }) => {
    return (
        <>
            {title && <Title text={title} />}

            <Stats data={data} />
        </>
    );
};

// Statistics.propTypes = {
//     title: PropTypes.string,
//     stats: PropTypes.array.isRequired,
// };

export default Statistics;