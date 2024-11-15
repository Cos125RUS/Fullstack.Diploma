/**
 * Блок картинок модального окна со справкой
 * @param photo
 * @param schema
 * @returns {JSX.Element}
 * @constructor
 */
const InfoModalPictures = ({photo, schema}) => {
    return (
        <div className="modal-info__pictures">
            <img alt="картинка с изображением металлического изделия" src={photo}/>
            <img alt="схематический рисунок металлического изделия" src={schema}/>
        </div>
    );
};

export default InfoModalPictures;