import Button from "../Button";

const BigGreyBtn = ({text, action, className}) => {
    if (className) {
        className += "  btn btn-big btn-grey";
    } else {
        className = " btn btn-big btn-grey";
    }
    return (
        <Button text={text} action={action} className={className}/>
    );
};

export default BigGreyBtn;