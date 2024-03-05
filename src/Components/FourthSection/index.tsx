import "./styles.css";

import Couple from "../../Assets/couple.png";
import ButtonCotacao from "../ButtonCotacao";

import useHookAccordeons from "../useHooks/useHooksAccordeons";
import { useEffect } from "react";
import AxiosConfig from "../../Config/AxiosConfig";

export default function FourthSection() {
    const { activeIndex, accordeons, setAccordeons, toggleAccordion } =
        useHookAccordeons();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosConfig.get(
                    "/v1/f42fca53-2029-4808-b429-edf21834d002"
                );
                setAccordeons(response.data);
            } catch (error) {}
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="fourth-section">
            <div className="accordion">
                {accordeons.map((acc, index) => (
                    <div key={acc.id} className="accordion-item">
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
