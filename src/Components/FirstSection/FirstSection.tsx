import ButtonCotacao from "../ButtonCotacao/ButtonCotacao";
import "./styles.css";

export default function FirstSection() {
    return (
        <div className="first-section">
            <div className="first-section-first-column">
                <h1>Tranquilidade para viver mais</h1>
            </div>
            <div className="first-section-second-column">
                <span>
                    Viva mais e melhor com os benefícios que um serguro de vida
                    te oferece
                </span>
                <ButtonCotacao />
            </div>
        </div>
    );
}
