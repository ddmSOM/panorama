import d3 from 'd3';
import { PropTypes } from 'react';
import { D3ReactBase } from '../../charts-base';
import DiscreteBarChartD3 from './DiscreteBarChartD3';

export default class DiscreteBarChart extends D3ReactBase {
  constructor (props) {
    super(props);
    this.chartConstructor = DiscreteBarChartD3;
  }

  static propTypes = {...D3ReactBase.propTypes,
    barSpacing: PropTypes.number
  };

  static defaultProps = {...D3ReactBase.defaultProps,
    barSpacing: 0.1,
    xScale: d3.scale.ordinal(),
    className: 'bar-chart vertical',
    xaxis: {
      className: 'x axis',
      orient: 'bottom',
      position: 'bottom',
      attr: {
        dx: '0',
        dy: '0.5em'
      },
      style: {
        'text-anchor': 'middle'
      }
    },
    yaxis: {
      className: 'y axis',
      orient: 'left',
    }
  };
}

export DiscreteBarChartD3 from './DiscreteBarChartD3';