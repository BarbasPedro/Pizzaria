import { useState, useEffect } from "react";

type Product = {
    IdProd: number;
    NomeProd: string;
    Descricao: string;
    PcVenda: number;
    Imagem: string;
};

type EditFormProps = {
    product: Product;
    onSave: (updatedProduct: Product) => void;
    onCancel: () => void;
};

const EditForm = ({ product, onSave, onCancel }: EditFormProps) => {
    // Estados para os campos do formulário
    const [name, setName] = useState(product?.NomeProd || "");
    const [description, setDescription] = useState(product?.Descricao || "");
    const [price, setPrice] = useState(product?.PcVenda || 0);
    const [image, setImage] = useState(product?.Imagem || "");

    // Atualiza os estados quando o produto prop muda
    useEffect(() => {
        if (product) {
            setName(product.NomeProd);
            setDescription(product.Descricao);
            setPrice(product.PcVenda);
            setImage(product.Imagem);
        }
    }, [product]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!product) return; // Garante que o produto existe

        onSave({
            ...product,
            NomeProd: name,
            Descricao: description,
            PcVenda: price,
            Imagem: image,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nome do Produto:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Descrição:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Preço:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
            </div>
            <div className="form-group">
                <label>URL da Imagem:</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button type="submit">Salvar Alterações</button>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default EditForm;
