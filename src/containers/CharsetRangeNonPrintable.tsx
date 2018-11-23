import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import CharsetRangeNonPrintable from '../components/CharsetRangeNonPrintable';

import {
	RootReducerState,
	isHightlightRangeAny,
	isHighlightRangeNonPrintable,
} from '../store';

interface StateProps {
	highlight?: boolean;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	highlight: isHightlightRangeAny(state) ? isHighlightRangeNonPrintable(state) : undefined,
});

const mapDispatchToProps: MapDispatchToProps<{}, {}> = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CharsetRangeNonPrintable);

