import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apiActions from '../../redux/actions/api-actions';
import Carousel from './carousel';


const mapStateToProps = state => {
    console.log(state.data.images, 'state.data.data');

    return {
        images: state.data.images,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getData: apiActions.getData,
            dispatch,
        },
        dispatch
    );
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Carousel);


