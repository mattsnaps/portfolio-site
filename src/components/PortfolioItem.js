import {useParams} from "react-router-dom";

const PortfolioItem = () => {

    console.log(useParams().id);

    const id = useParams().id;

    return (
        <div>
            <h1>A Thing I've done</h1>
            <p>The id is {id}</p>
        </div>

    );
};

export default PortfolioItem;