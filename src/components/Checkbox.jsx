import Tag from "./Tag";
function Checkbox(props) {
    let { name, id, label, value, tag, onChange, subLabel, disabled=false } = props;
    return (
        <label className={`Fz(14px) Py(5px) Px(14px) D(f) Ai(c) Jc(sb) Us(n) hoverable ${disabled ? 'Cur(na)' : 'Cur(p)'}`} htmlFor={id}>
            <span className="D(f) Ai(c)">
                {props.children}
                <span className="ellipsis">
                    {label}
                    {
                        tag && <Tag name={tag} />
                    }
                    {
                        subLabel &&
                        <span className="D(b) Fz(12px) C(color-grey3)">
                        {subLabel}
                        </span>
                    }
                </span>
            </span>
            
            <input
                className="native-checkbox Hidden"
                name={name}
                id={id} 
                type="checkbox" 
                checked={value} 
                onChange={onChange} 
                disabled={disabled}
            />
            <div className="custom-checkbox">
                <div className="custom-checkbox--ball"></div>
            </div>
        </label>
    );
  };
  export default Checkbox;