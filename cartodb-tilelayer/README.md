## CartoDBTileLayer

Load and render tiles from CartoDB into a [`react-leaflet`](https://github.com/PaulLeCam/react-leaflet) map.

Part of the [`@stamen/panorama`](https://www.npmjs.com/package/@stamen/panorama) toolkit.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { CartoDBTileLayer } from '@stamen/cartodb-tilelayer';

ReactDOM.render(
  <Map>
    <CartoDBTileLayer
      userId={ /* cartodb user id */ }
      sql={ /* SQL query to generate tiles */ }
      cartocss={ /* CartoCSS to style tiles */ }
    />
  </Map>, document.body);
```
