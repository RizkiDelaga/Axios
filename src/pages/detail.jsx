import {useParams} from 'react-router-dom'
function Detail() {
    const { id } = useParams();
    return (
            <>
                <h1>Halaman Detail</h1>
                <p>Parameter ID = { id }</p>
            </>
        )
    }

export default Detail;