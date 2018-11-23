import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import CharsetRangePrintable from '../components/CharsetRangePrintable';

import {
	RootReducerState,
	isHightlightRangeAny,
	isHighlightRangePrintable,
} from '../store';

interface StateProps {
	highlight?: boolean;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	highlight: isHightlightRangeAny(state) ? isHighlightRangePrintable(state) : undefined,
});

const mapDispatchToProps: MapDispatchToProps<{}, {}> = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CharsetRangePrintable);

