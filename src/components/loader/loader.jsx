import Spinner from 'react-bootstrap/Spinner';

const Loader = ({ loading }) => {
    return (
    loading && (
        <Spinner animation="border" variant="warning" />
    )
    );
}

export default Loader;