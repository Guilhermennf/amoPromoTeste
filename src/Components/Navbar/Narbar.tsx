import "./styles.css";

import ArrowIcon from "../../Assets/arrow.png";
import UserIcon from "../../Assets/iconUser.png";
import CellphoneIcon from "../../Assets/cellphone.png";
import WhatsAppIcon from "../../Assets/whatsapp.png";

export default function Navbar() {
    return (
        <>
            <div className="header">
                <div className="header-content">
                    <span className="header-content-first-text">
                        CENTRAL DE VENDA:{" "}
                    </span>
                    <img
                        src={CellphoneIcon}
                        alt="Cellphone Icon"
                        width="20"
                        height="20"
                    />
                    <span className="header-content-phone">(31) 4000-1667</span>
                    <img
                        src={WhatsAppIcon}
                        alt="WhatsApp Icon"
                        width="20"
                        height="20"
                    />
                    <span className="header-content-phone">(31) 2534-2115</span>
                </div>
            </div>
            <header className="navbar-container">
                <a href="#/" className="logo">
                    <svg
                        width="190"
                        height="36"
                        viewBox="0 0 190 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M32.7612 25.3476L19.7541 11.9278L0 11.9116L13.0306 25.3476H32.7612Z"
                            fill="#80B79F"
                        />
                        <path
                            d="M28.7318 5.34846C21.9062 -1.78282 10.8471 -1.78282 4.02936 5.34846C2.18355 7.26904 0.848287 9.51377 0 11.9125H32.7533C31.9129 9.51377 30.5698 7.26904 28.7318 5.34846Z"
                            fill="white"
                        />
                        <path
                            d="M0 25.3469C0.848287 27.5754 2.18355 29.6662 4.01365 31.4571C10.8392 38.1346 21.9141 38.1346 28.7397 31.4571C30.5698 29.6662 31.905 27.5754 32.7533 25.3469H0Z"
                            fill="white"
                        />
                        <path
                            d="M50.3866 21.9022C50.3866 21.2863 50.7715 21.027 51.2349 21.027H52.0125C52.5073 21.027 52.6801 21.424 52.6487 22.121C52.578 23.4338 52.8608 24.8843 54.3374 24.8843C55.8848 24.8843 56.2775 23.7174 56.2775 22.3398C56.2775 20.7757 54.9029 19.6817 53.7719 18.8471C52.4288 17.826 50.528 16.0837 50.528 13.7903C50.528 10.8811 51.9339 9.13879 54.5102 9.13879C57.0865 9.13879 58.3511 10.3381 58.3511 13.9038C58.3511 14.5602 57.9269 14.779 57.5028 14.779H56.7252C56.2304 14.779 56.0576 14.3819 56.089 13.685C56.1597 12.5586 56.0183 11.2863 54.5024 11.2863C53.3006 11.2863 52.6723 12.1615 52.6723 13.4662C52.6723 14.9167 53.5912 15.9054 54.5416 16.6266C56.0183 17.753 58.4218 19.6088 58.4218 22.121C58.4218 24.4143 57.6834 27.0318 54.3296 27.0318C51.8004 27.0318 50.3866 25.5002 50.3866 21.9022Z"
                            fill="white"
                        />
                        <path
                            d="M60.6442 18.0852C60.6442 12.7772 61.4218 9.13867 65.0505 9.13867C67.7289 9.13867 68.9307 10.7351 68.9307 15.3542C68.9307 16.0836 68.8286 17.3883 68.6872 18.3364H63.0476C63.0476 22.915 63.4011 24.8842 65.0898 24.8842C66.7079 24.8842 66.8178 23.069 66.7785 22.2991C66.7471 21.6103 66.9199 21.2051 67.4148 21.2051H68.0117C68.4358 21.2051 68.86 21.4239 68.86 22.0803C68.86 25.3542 67.6975 27.0236 65.0191 27.0236C61.3825 27.0317 60.6442 23.3931 60.6442 18.0852ZM66.7078 16.4077C66.7393 15.9701 66.7785 15.4596 66.7785 14.6654C66.7785 12.6638 66.5351 11.2862 65.0505 11.2862C63.6053 11.2862 63.0791 12.7043 63.0791 16.4158H66.7078V16.4077Z"
                            fill="white"
                        />
                        <path
                            d="M79.8723 9.26023C79.2754 9.26023 78.5921 9.6249 78.0972 10.3218C77.9009 10.1111 77.5003 9.79507 77.2018 9.6411C76.8562 9.46282 76.3378 9.13867 75.2932 9.13867C72.8661 9.13867 71.2717 11.0349 71.2717 15.103C71.2717 17.6719 71.9314 19.3899 72.9996 20.2813C72.3084 20.8567 71.9236 21.6427 71.9236 22.7448C71.9236 23.7821 72.2692 24.4952 72.8583 25.103C71.578 26.0349 70.8868 27.6719 70.8868 29.4304C70.8868 32.1451 72.5127 34.4709 75.5602 34.4709C78.6078 34.4709 80.2336 32.1451 80.2336 29.4304C80.2336 26.7156 78.6078 24.2845 75.5602 24.2845C75.3167 24.2845 74.9397 24.3169 74.7276 24.3575C74.3113 24.0738 74.0679 23.5714 74.0679 22.7529C74.0679 21.8615 74.4449 21.2862 74.9319 21.0349C75.034 21.0349 75.1753 21.0674 75.2775 21.0674C77.7045 21.0674 79.2911 19.1711 79.2911 15.103C79.2911 13.7173 79.1105 12.599 78.7806 11.7157C78.9769 11.6832 79.1654 11.6508 79.3618 11.6508C79.6367 11.6508 79.8095 11.6832 80.1237 11.8615C80.2965 11.9669 80.3986 12.0074 80.5714 12.0074C80.917 12.0074 81.0898 11.7967 81.0898 11.432V10.3623C81.1212 9.61679 80.6028 9.26023 79.8723 9.26023ZM75.5759 26.5049C77.3039 26.5049 78.1051 27.7934 78.1051 29.4385C78.1051 31.0836 77.3118 32.372 75.5759 32.372C73.8479 32.372 73.0468 31.0836 73.0468 29.4385C73.0468 27.7934 73.8479 26.5049 75.5759 26.5049ZM75.301 19.1792C73.8087 19.1792 73.4316 17.4288 73.4316 15.103C73.4316 12.7772 73.8087 11.0268 75.301 11.0268C76.7227 11.0268 77.1704 12.7772 77.1704 15.103C77.1704 17.4288 76.7227 19.1792 75.301 19.1792Z"
                            fill="white"
                        />
                        <path
                            d="M82.3945 23.0666V10.0439C82.3945 9.64684 82.6773 9.3551 83.0622 9.3551H84.1225C84.5074 9.3551 84.7902 9.64684 84.7902 10.0439V23.0585C84.7902 24.112 85.175 24.7279 86.2668 24.7279C86.903 24.7279 87.8534 24.4766 88.5917 24.0715V10.0439C88.5917 9.64684 88.8745 9.3551 89.2594 9.3551H90.3197C90.7046 9.3551 90.9874 9.64684 90.9874 10.0439V24.2984C90.9874 25.133 91.2701 25.4653 91.8671 25.4653V25.9029C91.8671 26.4134 91.3722 27.0293 90.1391 27.0293C89.4714 27.0293 88.9373 26.7376 88.7331 25.9029C87.8848 26.5593 86.7616 27.0293 85.6306 27.0293C83.8398 27.0293 82.3945 26.0083 82.3945 23.0666Z"
                            fill="white"
                        />
                        <path
                            d="M94.4514 26.1224V10.0446C94.4514 9.64749 94.7341 9.35576 95.119 9.35576H96.1794C96.5642 9.35576 96.847 9.64749 96.847 10.0446V10.5146C97.8367 9.56646 98.8578 9.34766 99.2819 9.34766C100.02 9.34766 100.554 9.71232 100.554 10.4741V11.5681C100.554 11.9327 100.382 12.1515 100.028 12.1515C99.8867 12.1515 99.7453 12.1191 99.5725 12.0057C99.2583 11.8274 99.0777 11.7869 98.7949 11.7869C97.7346 11.7869 96.8549 12.4757 96.8549 12.4757V26.1143C96.8549 26.5113 96.5721 26.8031 96.1872 26.8031H95.119C94.7263 26.8112 94.4514 26.5194 94.4514 26.1224Z"
                            fill="white"
                        />
                        <path
                            d="M101.811 18.0852C101.811 11.1727 103.359 9.13867 106.108 9.13867C108.857 9.13867 110.404 11.1727 110.404 18.0852C110.404 24.9977 108.865 27.0317 106.116 27.0317C103.367 27.0317 101.811 24.9896 101.811 18.0852ZM108.017 18.0852C108.017 11.7238 107.208 11.3186 106.116 11.3186C105.024 11.3186 104.215 11.7157 104.215 18.0852C104.215 24.4547 105.024 24.8518 106.116 24.8518C107.208 24.8437 108.017 24.4466 108.017 18.0852Z"
                            fill="white"
                        />
                        <path
                            d="M112.635 21.902C112.635 21.2861 113.02 21.0268 113.483 21.0268H114.261C114.756 21.0268 114.929 21.4239 114.897 22.1208C114.826 23.4336 115.109 24.8842 116.586 24.8842C118.133 24.8842 118.526 23.7173 118.526 22.3396C118.526 20.7756 117.151 19.6816 116.02 18.8469C114.677 17.8259 112.776 16.0836 112.776 13.7902C112.776 10.881 114.182 9.13867 116.759 9.13867C119.335 9.13867 120.6 10.338 120.6 13.9037C120.6 14.5601 120.175 14.7789 119.751 14.7789H118.974C118.479 14.7789 118.306 14.3818 118.337 13.6849C118.408 12.5584 118.267 11.2862 116.751 11.2862C115.549 11.2862 114.921 12.1614 114.921 13.4661C114.921 14.9166 115.84 15.9053 116.79 16.6265C118.267 17.7529 120.67 19.6087 120.67 22.1208C120.67 24.4142 119.932 27.0317 116.578 27.0317C114.049 27.0317 112.635 25.5001 112.635 21.902Z"
                            fill="white"
                        />
                        <path
                            d="M130.047 26.9895C128.711 26.9895 127.863 26.406 127.541 25.7172V33.9749C127.541 34.372 127.258 34.6637 126.873 34.6637H123.881C123.496 34.6637 123.213 34.372 123.213 33.9749V10.0446C123.213 9.64751 123.496 9.35577 123.881 9.35577H125.114C126.104 9.35577 126.913 9.64751 127.298 10.6281C127.722 9.67992 128.813 9.17749 130.047 9.17749C133.039 9.17749 134.626 11.6491 134.626 18.0835C134.626 24.5178 133.039 26.9895 130.047 26.9895ZM128.562 12.4838C128.138 12.4838 127.824 12.5892 127.541 12.735V23.4238C127.824 23.5697 128.138 23.675 128.562 23.675C129.583 23.675 130.29 23.2374 130.29 18.0754C130.29 12.9538 129.583 12.4838 128.562 12.4838Z"
                            fill="white"
                        />
                        <path
                            d="M143.966 14.0066C143.825 14.0066 143.652 13.9337 143.472 13.8284C143.259 13.6825 142.945 13.6096 142.663 13.6096C141.602 13.6096 140.762 14.2984 140.762 14.2984V26.1136C140.762 26.5107 140.479 26.8024 140.094 26.8024H137.102C136.717 26.8024 136.434 26.5107 136.434 26.1136V10.0439C136.434 9.64684 136.717 9.3551 137.102 9.3551H138.374C139.364 9.3551 140.063 9.89805 140.314 10.7733C141.123 9.86564 142.144 9.3551 143.205 9.3551C143.943 9.3551 144.477 9.71977 144.477 10.4815V13.3908C144.461 13.7554 144.32 14.0066 143.966 14.0066Z"
                            fill="white"
                        />
                        <path
                            d="M150.876 27.0317C147.672 27.0317 145.166 24.9977 145.166 18.0852C145.166 11.1727 147.672 9.13867 150.876 9.13867C154.12 9.13867 156.586 11.1727 156.586 18.0852C156.586 24.9977 154.12 27.0317 150.876 27.0317ZM150.876 12.5179C149.957 12.5179 149.502 12.915 149.502 18.0852C149.502 23.2554 149.957 23.6524 150.876 23.6524C151.795 23.6524 152.251 23.2554 152.251 18.0852C152.251 12.915 151.787 12.5179 150.876 12.5179Z"
                            fill="white"
                        />
                        <path
                            d="M176.186 26.8127H173.193C172.808 26.8127 172.526 26.521 172.526 26.1239V13.79C172.526 12.8824 172.172 12.5178 171.434 12.5178C170.978 12.5178 170.342 12.6636 169.776 12.9554V26.1158C169.776 26.5129 169.494 26.8046 169.109 26.8046H166.116C165.731 26.8046 165.449 26.5129 165.449 26.1158V13.79C165.449 12.8824 165.095 12.5178 164.357 12.5178C163.901 12.5178 163.265 12.6636 162.7 12.9554V26.1158C162.7 26.5129 162.417 26.8046 162.032 26.8046H159.039C158.654 26.8046 158.372 26.5129 158.372 26.1158V10.0461C158.372 9.64904 158.654 9.3573 159.039 9.3573H160.767C161.616 9.3573 162.354 9.75439 162.597 10.5972C163.265 9.90836 164.396 9.14661 166.014 9.14661C167.601 9.14661 168.622 9.76249 169.187 10.816C170.177 9.86784 171.371 9.14661 173.099 9.14661C175.675 9.14661 176.869 10.743 176.869 13.6928V26.132C176.853 26.521 176.571 26.8127 176.186 26.8127Z"
                            fill="white"
                        />
                        <path
                            d="M184.29 27.0317C181.085 27.0317 178.58 24.9977 178.58 18.0852C178.58 11.1727 181.085 9.13867 184.29 9.13867C187.534 9.13867 190 11.1727 190 18.0852C190 24.9977 187.534 27.0317 184.29 27.0317ZM184.29 12.5179C183.371 12.5179 182.915 12.915 182.915 18.0852C182.915 23.2554 183.371 23.6524 184.29 23.6524C185.209 23.6524 185.664 23.2554 185.664 18.0852C185.664 12.915 185.201 12.5179 184.29 12.5179Z"
                            fill="white"
                        />
                    </svg>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li>
                        <a href="#MultiTrip">Multi-trip</a>
                    </li>
                    <li>
                        <a href="#Atendimento">Atendimento</a>
                    </li>
                    <li>
                        <a href="#FAQ">FAQ</a>
                    </li>
                    <li>
                        <a href="#Afiliados">Afiliados</a>
                    </li>
                    <li>
                        <a href="#Blog">Blog</a>
                    </li>
                    <li id="area-cliente">
                        <a href="#AreaCliente">
                            <img src={UserIcon} alt="User Icon" />
                            Área do Cliente{" "}
                            <img src={ArrowIcon} alt="Arrow Icon" />
                        </a>
                    </li>
                </ul>
            </header>
        </>
    );
}