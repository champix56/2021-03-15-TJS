import './Button.css';
import PropTypes from 'prop-types';
export default function Button(props) {
    console.log(props);
    return (
        <div className="Button" style={{
            backgroundColor: undefined !== props.bgColor ? props.bgColor : 'green',
            color: undefined!==props.color?props.color:'white'
        }}>
            {undefined !== props.children && props.children}{props.value}
        </div>
    );
}
Button.propTypes={
    value:PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    color:PropTypes.string
}