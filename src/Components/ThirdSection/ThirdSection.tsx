import "./styles.css";

import ButtonCotacao from "../ButtonCotacao/ButtonCotacao";
import CardMorte from "../CardMorte/CardMorte";

export default function ThirdSection() {
    return (
        <div className="third-section">
            <h3>Nossas coberturas</h3>
            <p>Veja mais detalhes de cada proteção!</p>
            <div className="third-section-cards">
                <CardMorte />
                <CardMorte />
                <CardMorte />
            </div>
            <ButtonCotacao />
        </div>
    );
}
