import { useState } from "react";

export default function useHookAccordeons() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };
    return {
        activeIndex,
        setActiveIndex,
        toggleAccordion,
    };
}
