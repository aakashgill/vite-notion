import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";
import Tag from "./Tag";
function Dropdown(props) {
    let {defaultVal, list } = props.options;
    let [isDropdownVisible, setIsDropdownVisible] = useState(false);
    let [dropdownValue, setDropdownValue] = useState(defaultVal);
    let ref = useRef();

    function changeDropdownValue(item) {
        setDropdownValue(item.name);
        setIsDropdownVisible(false)
    }
    
    useEffect(() => {
        function checkIfClickedOutside(e) {
          if (isDropdownVisible && ref.current && !ref.current.contains(e.target)) {
            setIsDropdownVisible(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isDropdownVisible])
    return (
        <div className="Pos(r)" ref={ref}>
            <button type="button" onClick={() => setIsDropdownVisible(oldState => !oldState)} className="button button--small button--transparent Bgc(color-grey4):h Fz(14px)">
                <span className="Mend(5px)">{dropdownValue}</span>
                <Icon name="icon-chevron-down" width="10" />
            </button>
            {
                isDropdownVisible &&
                <div className="Pos(a) Bgc(color-white) Bdrs(4px) W(260px) Bxsh($shadow) P(3px) End(0) Z(1)">
                    <ul className="P(0) List(n)">
                        {
                            list.map(function(item, index) {
                                return (
                                    <li key={index}>
                                        <button 
                                            type="button"
                                            disabled={item.disabled || false}
                                            data-name={item.name} 
                                            onClick={() => changeDropdownValue(item)} 
                                            className={`W(100%) Bd(0) Ta(start) Bgc(t) Py(4px) Px(10px) Bgc(color-grey4):h Bdrs(4px) D(f) Ai(c) Jc(sb) ${item.disabled ? 'Cur(na)': 'Cur(p)'}`}
                                        >
                                            <span>
                                                <span className="Fz(14px)">{item.name}</span>
                                                { item.tag && <Tag name={item.tag} />}
                                                <span className="D(b) Mt(2px) Fz(12px) C(color-grey3)">{item.description}</span>
                                            </span>
                                            {
                                                item.name == dropdownValue ? <Icon name="icon-check" width="14" /> : ''
                                            }
                                            
                                        </button>
                                        
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default Dropdown;