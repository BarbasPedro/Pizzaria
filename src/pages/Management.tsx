import { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import "../styles/Management.css";

type Product = {
    id: number;
    name: string;
    description: string;
    price: string;
}

const Management = () => {
  // Estado para armazenar a lista de produtos
    const [productData, setProductData] = useState([
        {
            id: 1,
            name: "Frango com Catupiry",
            description: "Frango desfiado com catupiry",
            price: "R$ 35,00",
            image: "/src/assets/Pizzas/pizza-frango-catupiry.png",
        },
        {
            id: 2,
            name: "Calabresa com Cebola",
            description: "Calabresa acompanhado de cebola",
            price: "R$ 35,00",
            image: "/src/assets/Pizzas/pizza-calabresa-cebola.png",
        },
        {
            id: 3,
            name: "Muçarela com Tomate",
            description: "Muçarela com tomate e oregano",
            price: "R$ 35,00",
            image: "/src/assets/Pizzas/pizza-muçarela.png",
        },
        {
            id: 4,
            name: "Chocolate e Banana",
            description: "Chocolate ao leite e banana",
            price: "R$ 35,00",
            image: "/src/assets/Pizzas/pizza-chocolate-banana.png",
        },
    ]);

    // Estado para controlar qual produto está sendo editado
    const [editingProduct, setEditingProduct] = useState(null);

    // Função para iniciar a edição de um produto
    const handleEdit = (product: Product) => {
        setEditingProduct(product);
    };

    // Função para salvar as alterações
    const handleSave = (updatedProduct) => {
        setProductData((prevData) =>
        prevData.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        )
        );
        setEditingProduct(null); // Finaliza a edição
    };

    return (
        <>
        <Header />
        <Banner />
        <div className="product-management-container">
            <h1>Lista de Produtos</h1>

            {/* Lista de produtos */}
            <div className="product-list">
            {productData.map((product) => (
                <div key={product.id} className="product-card">
                {editingProduct?.id === product.id ? (
                    <EditForm
                        product={product}
                        onSave={handleSave}
                        onCancel={() => setEditingProduct(null)}
                    />
                    ) : (
                    <>
                        <div className="product-card-content">
                            <p>#{product.id}</p>
                            <img src={product.image} alt={product.name} />
                            <p className="form-group-title-input">{product.name}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button onClick={() => handleEdit(product)}>Editar</button>
                        </div>
                    </>
                )}
                </div>
            ))}
            </div>
        </div>
        </>
    );
};

// Componente para o formulário de edição
const EditForm = ({ product, onSave, onCancel }) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...product, name, description, price });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <p>#{product.id}</p>
                <img src={product.image} alt={product.name} />
                <input
                    type="text"
                    value={name}
                    className="form-group-title-input"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Preço:</label>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit">Salvar Alterações</button>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default Management;
