
const SwitchBtn = ({cutting}) => {

    const switchCutting = (e) => {
        cutting[1](!cutting[0]);
    }

    return (
        <label className="option__switch">
            <input className="option__switch-checkbox" type="checkbox" checked={cutting[0]}
                   name="cutting" id="cutting" onChange={e => switchCutting(e)}/>
            <span className="option__switch-slider"></span>
            <div className="option__switch-background"></div>
        </label>
    );
};

export default SwitchBtn;