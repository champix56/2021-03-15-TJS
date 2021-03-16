import Button from './Button'
import PropTypes from 'props-type';
Button.propTypes={
    value:PropTypes.string.isRequired,
    onbuttonclicked:PropTypes.func.isRequired,
    bgColor:PropTypes.string,
    color:PropTypes.string
}