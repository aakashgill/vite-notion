function Tooltip(props) {
    let positionClasses = '';
    let {width = 250, position, image, content, children} = props;
    switch (position) {
        case 'top-left':
            positionClasses = 'End(100%) T(0)'
            break;

        case 'top-center':
            positionClasses = 'End(100%) T(50%) TranslateY(-50%) End(a)--sm Start(0)--sm'
            break;

        case 'bottom-right':
            positionClasses = 'End(0) T(100%)'
            break;

        default:
            positionClasses = 'Start(100%) T(0)'
            break;
    }
    return (
        <div className="tooltip Pos(r)">
            {children}
            <span style={{width: width + 'px'}} className={`tooltip:h_Op(1) tooltip:h_V(v) Op(0) V(h) Pos(a) Bgc(color-black) C(color-white) P(5px) Bdrs(4px) Mend(5px) Fz(12px) ${positionClasses}`}>
                {image && <img className="W(100%)" src={image} />}
                {content}
            </span>
        </div>
    )
}
export default Tooltip;