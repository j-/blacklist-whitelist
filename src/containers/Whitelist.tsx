import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';
import { RootReducerState, buildWhitelist } from '../store';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	value: buildWhitelist(state),
	readOnly: true,
});

const mapDispatchToProps: MapDispatchToProps<P, P> = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Input);

