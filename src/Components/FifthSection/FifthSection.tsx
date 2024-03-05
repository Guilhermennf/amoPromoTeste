import "./styles.css";

import WppButton from "../../Assets/wppButton.png";
import foneIconeFooter from "../../Assets/foneIconeFooter.png";

export default function FifthSection() {
    return (
        <div className="fifth-section">
            <div className="fifth-section-first-column">
                <h1>Ainda não sabe qual seguro contratar?</h1>
            </div>
            <div className="fifth-section-second-column">
                <div>
                    <h3>
                        Ligue pra gente e receba uma consultoria personalizada
                        gratuitamente!
                    </h3>
                    <p>
                        <img src={foneIconeFooter} alt="phone" />
                        <span>(99) 99999.9999</span>
                    </p>
                    <button>
                        <img src={WppButton} alt="WhatsApp icon" />
                        Se preferir, entre em contato pelo Whatsapp
                    </button>
                </div>
                <div className="fifth-section-second-column-service">
                    <span className="">
                        Atendemos pelo telefone de seg. a sex., das 9h às 17h
                    </span>
                </div>
            </div>
        </div>
    );
}
