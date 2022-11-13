import ClickToCopy from "./ClickToCopy";
function NotionWidgetURLCopy() {
  return (<div className="Py(10px) Px(14px) D(f)">
    <input value={window.location.href} className="button button--grey Cur(d) Fxg(1) M(0) Fxg(1) Bdendw(0) Bdrstend(0) Bdrsbend(0)" type="text" disabled />
    <ClickToCopy text="Copy web link" classNames="Bd Bdc(color-grey2) Bdrststart(0) Bdrsbstart(0)" textToCopy={window.location.href} />
  </div>);
}
export default NotionWidgetURLCopy