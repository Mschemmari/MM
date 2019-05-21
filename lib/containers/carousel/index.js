import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apiActions from '../../redux/actions/api-actions';
import Carousel from './carousel';


const mapStateToProps = state => {
    console.log(state.data);

    return {
        // data: state.Assets.isLoading,
        // isLoading: state.Assets.SECTIONS
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


