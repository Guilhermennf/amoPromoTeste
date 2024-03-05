import "./styles.css";
import AnjoImagem from "../../Assets/anjoImagem.png";

export default function CardMorte() {
    return (
        <div className="card-container">
            <div>
                <img src={AnjoImagem} alt="Anjo" />
            </div>

            <div>
                <span className="card-container-morte">Morte</span>
            </div>
            <div>
                <p className="card-container-p">
                    Se você vier a faltar por causa de um acidente ou doença, a
                    pessoa que você escolheu como beneficiário receberá o valor
                    contratado.
                </p>
            </div>
            <div>
                <button className="card-container-button">Saiba Mais</button>
            </div>
        </div>
    );
}
