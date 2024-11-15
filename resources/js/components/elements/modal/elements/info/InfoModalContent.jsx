import InfoModalPictures from "./InfoModalPictures";
import InfoModalOptions from "./InfoModalOptions";
import InfoModalText from "./InfoModalText";

/**
 * Содержимое модального окна со справкой
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
const InfoModalContent = ({data}) => {
    return (
        <>
            <InfoModalPictures photo={data.photo} schema={data.schema}/>
            <InfoModalOptions options={data.options}/>
            <InfoModalText title={data.title} text={data.text}/>
        </>
    );
};

export default InfoModalContent;