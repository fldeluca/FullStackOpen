const Total = ({parts}) => {
    let totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)   

    return (<div>
        <p><b>Number of exercises {totalAmount}</b></p>
    </div>)
}

export default Total