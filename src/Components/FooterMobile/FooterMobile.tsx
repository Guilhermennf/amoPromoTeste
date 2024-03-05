import "./styles.css";

import SegurosPromoFooter from "../../Assets/segurosPromoFooter.png";
import Group1 from "../../Assets/group1.png";
import WppFooter from "../../Assets/wppFooter.png";
import Cellphone from "../../Assets/cellphone.png";
import Envelope from "../../Assets/envelope.png";
import MasterCard from "../../Assets/flag_master copy 3.png";
import VisaCard from "../../Assets/flag_visa copy 3.png";
import AmexCard from "../../Assets/flag_amex copy 3.png";
import EloCard from "../../Assets/flag_elo copy 3.png";
import DinersCard from "../../Assets/flag_diners copy 3.png";
import HyperCard from "../../Assets/logo_hyper.png";
import Boleto from "../../Assets/boleto.png";
import fivePercent from "../../Assets/fivePercent.png";
import transferenciaBancaria from "../../Assets/transferenciaBancaria.png";
import Pix from "../../Assets/pix.png";
import footerEnd from "../../Assets/footerFinal.png";

import useHookAccordeons from "../useHooks/useHooksAccordeons";
import { mockAccordeon } from "../../Mocks/AccordeonFooter/AccordeonFooter";

export default function FooterMobile() {
    const { activeIndex, toggleAccordion } = useHookAccordeons();

    return (
        <div className="footer-mobile">
            <hr className="footer-mobile-first-bar" />
            <img src={SegurosPromoFooter} alt="SegurosPromoFooter" />
            <img src={Group1} alt="Group1" />
            <hr className="footer-mobile-second-bar" />
            <div className="footer-mobile-sales">
                <p className="footer-mobile-sales-p">CENTRAL DE VENDAS:</p>
                <button>
                    <img src={Cellphone} alt="Cellphone" />
                    <span>(31) 4000-1667</span>
                </button>
                <button>
                    <img src={WppFooter} alt="WppFooter" />
                    <span>(31) 98204-2542</span>
                </button>
                <p className="footer-mobile-sales-p">ATENDIMENTO:</p>
                <button>
                    <img src={Cellphone} alt="Cellphone" />
                    <span>(31) 4000-1667</span>
                </button>
                <button>
                    <span>Central de Ajuda</span>
                </button>
                <button>
                    <img src={Envelope} alt="Cellphone" />
                    <span>atendimento@segurospromo.com.br</span>
                </button>
            </div>
            <hr className="footer-mobile-second-bar" />
            <div className="accordion-footer">
                {mockAccordeon.map((acc, index) => (
                    <div key={index} className="accordion-footer-item">
                        <div
                            className="accordion-footer-title"
                            onClick={() => toggleAccordion(index)}
                        >
                            {acc.title}
                            <span
                                className={
                                    activeIndex === index
                                        ? "arrow up"
                                        : "arrow down"
                                }
                            ></span>
                        </div>
                        {activeIndex === index && (
                            <div
                                className={`accordion-footer-content ${
                                    activeIndex === index ? "active" : ""
                                }`}
                            >
                                <ul>
                                    {acc.content.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="footer-mobile-payments">
                <h3>FORMAS DE PAGAMENTO:</h3>
                <p>Crédito em até 12 vezes</p>
                <div className="footer-mobile-payments-cards">
                    <img src={MasterCard} alt="MasterCard" />
                    <img src={VisaCard} alt="VisaCard" />
                    <img src={AmexCard} alt="AmexCard" />
                    <img src={EloCard} alt="EloCard" />
                    <img src={DinersCard} alt="DinersCard" />
                    <img src={HyperCard} alt="HyperCard" />
                </div>
                <p>Boleto bancário</p>
                <div className="footer-mobile-payments-boleto">
                    <img src={Boleto} alt="Boleto" id="Boleto" />
                    <img src={fivePercent} alt="fivePercent" id="fivePercent" />
                </div>
                <p>Transferência bancária</p>
                <div className="footer-mobile-payments-transfer">
                    <img
                        src={transferenciaBancaria}
                        alt="transferenciaBancaria"
                    />
                </div>
                <p>Pagamento com pix</p>
                <div className="footer-mobile-payments-pix">
                    <img src={Pix} alt="Pix" />
                </div>
            </div>
            <hr className="footer-mobile-second-bar" />
            <div className="footer-mobile-end">
                <p>
                    2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras, nº 1.532,
                    10º andar - Belo Horizonte - MG © 2017 Seguros Promo -
                    Emitir Shop | By - 2XT Tecnologia
                </p>
                <img src={footerEnd} alt="footerEnd" />
            </div>
        </div>
    );
}
