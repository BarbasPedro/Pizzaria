import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import EditForm from "../components/ProductEditForm";
import "../styles/Management.css";

type Product = {
    IdProd: number;
    NoGrupo: string;
    NomeProd: string;
    PcVenda: number;
    Imagem: string;
    Descricao: string;
};

const Management = () => {
    const [productData, setProductData] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os produtos da API
    const fetchProducts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/produtos");
            if (!response.ok) {
                throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
            }
            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new Error("Dados recebidos não são uma lista de produtos.");
            }
            setProductData(data);
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

    // Função para iniciar a edição de um produto
    const handleEdit = (product: Product) => {
        setEditingProduct(product);
    };

    // Função para salvar as alterações
    const handleSave = async (updatedProduct: Product) => {
        try {
            // Prepara os dados para enviar ao backend
            const dataToSend = {
                NomeProd: updatedProduct.NomeProd,
                PcVenda: updatedProduct.PcVenda, // Já é um número
                Descricao: updatedProduct.Descricao,
                Imagem: updatedProduct.Imagem,
            };

            const response = await fetch(
                `http://127.0.0.1:5000/produtos/${updatedProduct.IdProd}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend), // Envia apenas os campos necessários
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao atualizar produto");
            }

            // Atualiza a lista de produtos localmente (sem precisar recarregar tudo)
            setProductData((prevData) =>
                prevData.map((product) =>
                    product.IdProd === updatedProduct.IdProd ? updatedProduct : product
                )
            );

            setEditingProduct(null); // Finaliza a edição
        } catch (error) {
            console.error("Erro:", error);
            setError("Falha ao atualizar o produto. Tente novamente mais tarde.");
        }
    };

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <>
            <Header />
            <Banner />
            <div className="product-management-container">
                <h1>Lista de Produtos</h1>

                {/* Lista de produtos */}
                <div className="product-list">
                    {productData.map((product) => (
                        <div key={product.IdProd} className="product-card">
                            {editingProduct?.IdProd === product.IdProd ? (
                                <EditForm
                                    product={product}
                                    onSave={handleSave}
                                    onCancel={() => setEditingProduct(null)}
                                />
                            ) : (
                                <>
                                    <div className="product-card-content">
                                        <p>#{product.IdProd}</p>
                                        <img src={product.Imagem || "/src/assets/ApaixonadosPorPizza.png"} alt={product.NomeProd} />
                                        <p className="form-group-title-input">{product.NomeProd}</p>
                                        <p>{product.Descricao}</p>
                                        <p>R$ {product.PcVenda.toFixed(2)}</p>
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

export default Management;
