function NotionWidgetHeader(props) {
    let { toggleInvitePeople } = props;
    return (
        <div className="Py(10px) Px(14px) D(f) Bdbw(1px) Bdbs(s) Bdbc(color-grey4)">
            <button onClick={() => toggleInvitePeople()} type="button" className="button button--grey Jc(fs) Fxg(1) Mend(8px)">
                <span className="ellipsis">Add emails or people</span>
            </button>
            <button onClick={() => toggleInvitePeople()} type="button" className="button Miw(70px)">Invite</button>
        </div>
    );
}
export default NotionWidgetHeader;