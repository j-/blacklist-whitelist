import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Char from '../components/Char';
import { RootReducerState, isSelected } from '../store';
import { toggleSelected } from '../store/actions';

interface StateProps {
	checked: boolean;
}

interface DispatchProps {
	onChange: () => void;
}

interface OwnProps {
	charCode: number;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state, { charCode }) => ({
	checked: isSelected(state, charCode),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch, { charCode }) => ({
	onChange: () => (
		dispatch(
			toggleSelected(charCode)
		)
	)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Char);
