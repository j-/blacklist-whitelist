import { connect, MapDispatchToProps } from 'react-redux';
import Button, { Props as P } from '../components/Button';
import { invertPrintable } from '../store/actions';

const mapDispatchToProps: MapDispatchToProps<P, P> = ({
	onClick: invertPrintable,
});

export default connect<P, P, P, P>(
	null,
	mapDispatchToProps,
)(Button);
