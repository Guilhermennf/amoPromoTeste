import { useState } from "react";
import { IAccordeon } from "../../Interfaces/Accordeon/Accordeon";

export default function useHookAccordeons() {
    const [activeIndex, setActiveIndex] = useState(0);

    const [accordeons, setAccordeons] = useState<Array<IAccordeon>>([]);

    const toggleAccordion = (index: number) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };
    return {
        activeIndex,
        setActiveIndex,
        accordeons,
        setAccordeons,
        toggleAccordion,
    };
}
