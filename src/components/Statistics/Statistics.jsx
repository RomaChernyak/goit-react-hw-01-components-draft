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

export default Statistics;