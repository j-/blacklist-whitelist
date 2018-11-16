import { connect, MapDispatchToProps } from 'react-redux';
import Button, { Props as P } from '../components/Button';

import {
	invertNonPrintable,
	highlightRangeNonPrintable,
	removeHightlight,
} from '../store/actions';

const mapDispatchToProps: MapDispatchToProps<P, P> = ({
	onClick: invertNonPrintable,
	onMouseOver: highlightRangeNonPrintable,
	onMouseOut: removeHightlight,
});

export default connect<P, P, P, P>(
	null,
	mapDispatchToProps,
)(Button);
