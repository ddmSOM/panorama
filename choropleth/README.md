## Choropleth

<img src='https://cloud.githubusercontent.com/assets/1127259/11770142/74317d52-a1ac-11e5-99bb-d38fbcf7fa02.png'>

A non-interactive choropleth, drawn with [d3](https://d3js.org/).

Part of the [`@stamen/panorama`](https://www.npmjs.com/package/@stamen/panorama) toolkit.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Choropleth } from '@stamen/panorama';

let mapChoroplethConfig = {
  // TODO
};

ReactDOM.render(<Choropleth {...mapChoroplethConfig}/>, document.body);
```

