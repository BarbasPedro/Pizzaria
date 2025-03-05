import "../styles/Card.css"

type CardProps = {
    name: string;
    image: string;
    description: string;
    price: string;
}

const Card = ({ name, image, description, price }: CardProps) => {
    return (
        <div className="card-container">
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default Card;
