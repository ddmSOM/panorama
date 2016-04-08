'use strict';

import React, { Component } from 'react';

import AreaChartExample from './components/example-areachart';
import BarChartExample from './components/example-barchart';
import D3ChoroplethExample from './components/example-d3Choropleth';
import Donut from './components/example-donut';
import IntroManagerExample from './components/example-introManager';
import ItemSelectorExample from './components/example-itemSelector';
import LeafletChoropleth from './components/example-leafletChoropleth';
import LegendExample from './components/example-legend';
import LineChartExample from './components/example-linechart';
import PunchcardExample from './components/example-punchcard';
import NavigationExample from './components/example-navigation';
import ScatterplotExample from './components/example-scatterplot';
import TextListExample from './components/example-textList';

class App extends Component {

  static displayName = 'App';

  constructor (props) {

    super(props);

    this.state = {};

  }

  render () {

    return (
      <div>
        <h1>Panorama Toolkit examples</h1>
        <hr />
        <h2>Area Chart</h2>
        <AreaChartExample />
        <h2>Bar Chart</h2>
        <BarChartExample />
        <h2>Choropleth</h2>
        <D3ChoroplethExample />
        <h2><a name='donut'>Donut</a></h2>
        <Donut />
        <h2>IntroManager</h2>
        <IntroManagerExample />
        <h2>ItemSelector</h2>
        <ItemSelectorExample { ...this.state.itemSelector } />
        <h2>Leaflet Choropleth</h2>
        <LeafletChoropleth />
        <h2>Legend</h2>
        <LegendExample { ...this.state.legend } />
        <h2>Line Chart</h2>
        <LineChartExample />
        <h2>Punchcard</h2>
        <PunchcardExample />
        <h2>Navigation</h2>
        <NavigationExample />
        <h2>Scatter Plot</h2>
        <ScatterplotExample />
        <h2>Text List</h2>
        <TextListExample />
      </div>
    );

  }

}

export default App;