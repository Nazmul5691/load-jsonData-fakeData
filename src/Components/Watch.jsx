/* eslint-disable react/prop-types */


const Watch = ({watch}) => {


    const { name, price } = watch;

    return (
        <div>
            <h3>watch</h3>
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;