import './arrow.scss';

const Left = ({ onClick }) => {
    return (
        <div className="left" onClick={onClick}>
            <svg width="178" height="112" viewBox="0 0 178 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame 1">
                    <rect width="178" height="112" fill="none" />
                    <g id="dark">
                        <path id="Polygon 1" d="M70.6062 56L31.1516 80.2487L31.1516 31.7513L70.6062 56Z" fill="#16a085"
                            fillOpacity="0.7" />
                    </g>
                    <g id="light">
                        <path id="Polygon 2" d="M89 56L49.5453 80.2487L49.5453 31.7513L89 56Z" fill="#16a085"
                            fillOpacity="0.3" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Left