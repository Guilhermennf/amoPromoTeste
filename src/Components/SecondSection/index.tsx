import "./styles.css";

import Laptop from "../../Assets/laptop.png";
import ButtonCotacao from "../ButtonCotacao";

export default function SecondSection() {
    return (
        <div className="second-section">
            <div className="second-section-first-column">
                <img src={Laptop} alt="laptop" />
            </div>
            <div className="second-section-second-column">
                <div>
                    <h3>Planos personalizados e sem burocracia</h3>
                </div>

                <ol className="second-section-second-column-infos">
                    <li>Informe seus dados</li>
                    <li>Descubra o plano ideal para o seu perfil</li>
                    <li>
                        Escolha sua forma de pagamento e contrate 100% online
                    </li>
                </ol>

                <div>
                    <h4>
                        Pronto! Agora você e sua família têm todos os benefícios
                        de viver com segurança total
                    </h4>
                </div>

                <div className="second-section-second-column-button">
                    <ButtonCotacao />
                </div>
            </div>
        </div>
    );
}
