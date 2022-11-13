import { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";
import Icon from "./Icon";
import SharingLink from "./SharingLink";
function InviteByEmail(props) {
    let {closeClickHandler} = props;
    let [emailInput, setEmailInput] = useState("");
    let [emailList, setEmailList] = useState([]);
    let [isDropdownVisible, setIsDropdownVisible] = useState(true);
    let [isInputFocus, setIsInputFocus] = useState(true);
    let ref = useRef();
    let inputRef = useRef();
    let dropdownConfig = {
        list: [
            {
                name: "Full access",
                description: "Can edit and share with others.",
                disabled: true,
                tag: "Personal Pro"
            },
            {
                name: "Can edit",
                description: "Can edit, but not share with others."
            },
            {
                name: "Can comment",
                description: "Can view and comment, but not edit."
            },
            {
                name: "Can view",
                description: "Cannot edit or share with others."
            }
        ],
        defaultVal: "Can edit"
    }

    useEffect(() => {
        function checkIfClickedOutside(e) {
          if (ref.current && !ref.current.contains(e.target)) {
            setIsDropdownVisible(false);
            setIsInputFocus(false);
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isDropdownVisible]);
    
    function addReceipientsList(e) {
        e.preventDefault()
        if(emailInput !== '') {
            setEmailList([...emailList, emailInput]);
            setEmailInput('');
            setIsInputFocus(true);
            inputRef.current.focus();
        }
    }

    function removeEmails(text) {
        let newEmailList = emailList.filter(function(email) {
            return email !== text;
        })

        setEmailList(newEmailList)
    }
    return (
        <div className="Py(10px) Px(14px)">
            <form onSubmit={(e) => addReceipientsList(e)}>
                <div onClick={() => setIsDropdownVisible(oldState => !oldState)} className={`D(f) Ai(fs) Jc(sb) Pos(r) Mb(10px) Bgc(color-grey4) Bgc(color-white):f Bdrs(4px) Bd Bdc(color-grey2) P(5px) Pb(0) ${isInputFocus ? 'Bgc(color-white) Bxsh(shadow-blue)' : ''}`}>
                    <div className="D(f) Ai(c) Flw(w) Fxg(1)">
                        {
                            emailList && 
                            emailList.map(function(email, index) {
                                return(
                                    <span key={index} className="Bgc(color-yellow) Bdrs(3px) Px(5px) D(if) Ai(c) Mb(6px) Mend(6px)">
                                        <span className="ellipsis Maw(200px)">{email}</span>
                                        <button type="button" onClick={(e) => removeEmails(email)} className="button button--small button--transparent">X</button>
                                    </span>
                                )
                            })
                        }
                        <div className="Mb(6px) Mend(6px) Fxg(1) Fxb(60px)">
                            <input 
                                ref={inputRef}
                                value={emailInput}
                                onClick={() => setIsInputFocus(true)}
                                onChange={(e) => setEmailInput(e.target.value)} 
                                autoFocus 
                                className="W(100%) Fz(14px) Bgc(t) Bd(0) Pend(10px) H(18px) O(0)" 
                                type="email" 
                                placeholder='Add emails or people' 
                            />
                        </div>
                    </div>    
                    <Dropdown options={dropdownConfig} />
                </div>

                <div className="Mb(10px) Pos(r)">
                    <textarea placeholder="Placeholder text " name="subject" className="Bd Bdc(color-grey2) W(100%) O(0) Py(10px) Px(5px) Fz(14px) Bgc(color-grey4) Bgc(color-white):f Bdrs(4px) Rsz(n)" cols="30" rows="6"></textarea>
                    {
                        isDropdownVisible && 
                    <div ref={ref} className="C(color-grey3) W(360px) Bgc(color-white) Bxsh($shadow) Py(6px) Px(14px) Bdrs(4px) Pos(a) T(0) Start(0)">
                        <div className="Fz(12px) Mb(10px) Fw(500)">
                            {
                                emailInput ? 
                                <span>Keep typing to invite email</span> : 
                                <span>Select a person</span>
                            }
                        </div>
                        <button 
                            type="submit"
                            disabled={emailInput.length ? false : true} 
                            className={`button button--transparent W(100%) Jc(fs) ${emailInput ? 'Bgc(color-grey2) P(4px) Bdrs(4px) Mx(-5px) Cur(p) ' : 'Jc(fs) P(0) H(a) Bgc(t):h Cur(na)'}`} 
                        >
                            {
                                emailInput ? 
                                <>
                                    <span className="Mend(15px) Lh(0)">
                                        <Icon name="icon-mail" width="23"/>
                                    </span>
                                    <span className="ellipsis">{emailInput}</span>
                                </>
                                : 
                                <span className="ellipsis">Type or paste in emails above, separated by commas.</span>
                            }
                        </button>
                    </div>
                    }

                </div>

                <div className="D(f) Jc(sb)">
                    <SharingLink/>
                    <div>
                        <button type="button" onClick={() => closeClickHandler()} className="button button--medium button--transparent Mend(10px)">Cancel</button>
                        <button type="button" className="button button--medium">Invite</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default InviteByEmail