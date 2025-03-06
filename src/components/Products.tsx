import Card from "./Card";
import "../styles/Products.css";
import { useState, useEffect } from "react";

type Product = {
    IdProd: number;
    NoGrupo: string;
    NomeProd: string;
    PcVenda: number;
    Imagem: string;
    Descricao: string;
};

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os produtos da API
    const fetchProducts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/produtos");
            if (!response.ok) {
                throw new Error("Erro ao buscar produtos");
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Erro:", error);
            setError("Falha ao carregar os produtos. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

    // Busca os produtos ao carregar o componente
    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="products-container">
            <h1>BEST SELLERS</h1>
            <div className="products-list">
                {products.map((product) => (
                    <Card
                        key={product.IdProd}
                        name={product.NomeProd || "Indisponível"} // Fallback para nome
                        image={product.Imagem || "ApaixonadosPorPizza.png"} // Fallback para imagem
                        description={product.Descricao?.trim() || "Indisponível"} // Fallback para descrição
                        price={`R$ ${product.PcVenda?.toFixed(2) || "Indisponível"}`} // Fallback para preço
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
