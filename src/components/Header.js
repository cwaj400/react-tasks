import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {
    return (
        <div>
            <header className='header'>
                <h1>
                    {title}
                </h1>
                <Button onAdd={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}/>
            </header>
        </div>
    );
};
Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in js.
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header;
