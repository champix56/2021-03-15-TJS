import './Button.css';
import PropTypes from 'prop-types';
/**
 * Button modulaire couleur et contenu
 * @param {Object} props bgColor? & color?
 * @returns component render
 */
export default function Button(props) {
    console.log(props);
    return (
        <div className="Button" style={{    
            ...props.style,
            backgroundColor: undefined !== props.bgColor ? props.bgColor : 'green',
            color: undefined!==props.color?props.color:'white'        
        }} onClick={props.onbuttonclicked}>
            {undefined !== props.children && props.children}{props.value}
        </div>
    );
}
Button.propTypes={
    value:PropTypes.string.isRequired,
    onbuttonclicked:PropTypes.func.isRequired,
    bgColor:PropTypes.string,
    color:PropTypes.string,
    style:PropTypes.object
}