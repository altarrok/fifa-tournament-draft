export const PitchSVG: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="452"
            height="684"
        >
            <rect width="452" height="684" fill="#0b0" opacity="0.7" ry="6"></rect>
            <g fill="none" stroke="#efe" strokeWidth="3">
                <path d="M11.22 22.62v638.8h429.6V22.62zM11.26 342h429.4"></path>
                <circle cx="226" cy="342" r="54.8"></circle>
                <circle cx="226" cy="342" r="2"></circle>
                <g id="a">
                    <path d="M9.9 30.07c4.85 0 8.82-4 8.82-8.9m162.5 100.8a54.91 54.91 0 0089.6 0m76.3-99.63v99.63h-242.2l.2-99.63m98.6.2V6.94l44.6.003v15.6m-77.9-.2v34.4h111.2v-34.4m160.5 7.7c-4.9 0-8.8-4-8.8-8.9"></path>
                    <circle cx="226" cy="90" r="2"></circle>
                </g>
                <use y="-684" transform="scale(1 -1)" xlinkHref="#a"></use>
            </g>
        </svg>
    );
}