function Tag(props) {
    let { name }  = props;
    return (
        <span className="Bgc(color-grey4) C(color-grey3) Mstart(5px) Fz(9px) Py(2px) Px(9px) Bdrs(3px) Tt(u)">
            {name}
        </span>
    );
}

export default Tag;