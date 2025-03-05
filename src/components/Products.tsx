import Card from "./Card"
import Pizza2 from "../assets/Pizzas/pizza-frango-catupiry.png"
import Pizza1 from "../assets/Pizzas/pizza-calabresa-cebola.png"
import Pizza3 from "../assets/Pizzas/pizza-muçarela.png"
import Pizza4 from "../assets/Pizzas/pizza-chocolate-banana.png"
import '../styles/Products.css'

const Products = () => {
    return (
        <div className="products-container">
            <h1>Mais pedidas</h1>
            <div className="products-list">
                <Card name="Frango com Catupiry" image={Pizza1} description="Frango desfiado com catupiry" price="R$ 35,00" />
                <Card name="Calabresa com Cebola" image={Pizza2} description="Calabresa acompanhado de cebola" price="R$ 35,00" />
                <Card name="Muçarela com Tomate" image={Pizza3} description="Muçarela com tomate e oregano" price="R$ 35,00" />
                <Card name="Chocolate e Banana" image={Pizza4} description="Chocolate ao leite e banana" price="R$ 35,00" />
            </div>
        </div>
    )
}

export default Products;
