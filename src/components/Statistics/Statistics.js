import Title from './Title/Title';
import Stats from './Stats/Stats';

console.log(Stats);

const Statistics = ({ data, title }) => {
    return (
        <>
            {title && <Title text={title} />}

            <Stats data={data} />
        </>
    );
};

export default Statistics;