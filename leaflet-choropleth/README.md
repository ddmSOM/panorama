## LeafletChoropleth

<img src='https://cloud.githubusercontent.com/assets/1127259/11770148/7447819c-a1ac-11e5-8e39-7a89049d6e27.png'>

An interactive choropleth rendered as a map layer on a [`react-leaflet`](https://github.com/PaulLeCam/react-leaflet) map.

Part of the [`@stamen/panorama`](https://www.npmjs.com/package/@stamen/panorama) toolkit.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { LeafletChoropleth } from '@stamen/leaflet-choropleth';

let leafletChoroplethConfig = {
	// TODO
};

ReactDOM.render(<LeafletChoropleth {...leafletChoroplethConfig}/>, document.body);
```
