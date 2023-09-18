import PropTypes from 'prop-types';

const Link = ({rout}) => {
    return (
        <div>
            <li className='ml-5 hover:bg-slate-400' ><a href={rout.path}>{rout.name}</a></li>
        </div>
    );
};
Link.propTypes={
 rout:PropTypes.object.isRequired
}

export default Link;