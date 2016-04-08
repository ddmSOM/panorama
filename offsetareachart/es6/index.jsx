import { PropTypes } from 'react';
import { D3ReactBase } from '../../charts-base';
import AreaChart from '../../areachart';
import OffsetAreaChartD3 from './OffsetAreaChartD3';

export default class OffsetAreaChart extends D3ReactBase {

  // extend superclass `props` validators
  static propTypes = {...D3ReactBase.propTypes,
    areaChartData: PropTypes.array,
    chartSpacing: PropTypes.number,
    colorPalette: PropTypes.array,
    selectedChartId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    chartIdAccessor: PropTypes.func,
    metadataAccessor: PropTypes.func,
    interpolate: PropTypes.string,
    circleRadius: PropTypes.number
  };

  // extend superclass `props` defaults
  static defaultProps = {...D3ReactBase.defaultProps,
    className: 'offset-area-chart',
    areaChartData: [],
    chartSpacing: 4,
    colorPalette: null,
    selectedChartId: null,
    chartIdAccessor: null,
    metadataAccessor: null,
    interpolate: 'basis',
    circleRadius: 2
  };

  constructor (props) {
    super(props);
    this.chartConstructor = OffsetAreaChartD3;

    // This accessor is implemented by the React component as well as the d3 chart.
    this.chartIdAccessor = props.chartIdAccessor;
  }
}
