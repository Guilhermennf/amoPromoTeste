import "./styles.css";

export default function ButtonCotacao(
    props: React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
) {
    return (
        <button id="button-cotacao" {...props}>
            Faça sua cotação
        </button>
    );
}
