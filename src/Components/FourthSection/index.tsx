import "./styles.css";

import Couple from "../../Assets/couple.png";
import ButtonCotacao from "../ButtonCotacao";

import useHookAccordeons from "../useHooks/useHooksAccordeons";
import { accordeons } from "../../Mocks/AccordeonFourthFooter/index";

export default function FourthSection() {
    const { activeIndex, toggleAccordion } = useHookAccordeons();

    return (
        <div className="fourth-section">
            <div className="accordion">
                {accordeons.map((acc, index) => (
                    <div key={index} className="accordion-item">
                        <div
                            className="accordion-title"
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
                                className={`accordion-content ${
                                    activeIndex === index ? "active" : ""
                                }`}
                            >
                                {acc.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div>
                <img src={Couple} alt="Couple" />
                <ButtonCotacao />
            </div>
        </div>
    );
}
