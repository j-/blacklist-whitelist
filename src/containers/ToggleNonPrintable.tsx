import { connect, MapDispatchToProps } from 'react-redux';
import Button, { Props as P } from '../components/Button';
import { invertNonPrintable } from '../store/actions';

const mapDispatchToProps: MapDispatchToProps<P, P> = ({
	onClick: invertNonPrintable,
});

export default connect<P, P, P, P>(
	null,
	mapDispatchToProps,
)(Button);
