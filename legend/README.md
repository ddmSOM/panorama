## Legend

Clickable legend that can be used to label and toggle layers of a visualization.

Part of the [`@stamen/panorama`](https://www.npmjs.com/package/@stamen/panorama) toolkit.

<img src='https://cloud.githubusercontent.com/assets/1127259/11770152/744dafea-a1ac-11e5-8c44-d0e58671461a.png'>

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Legend } from '@stamen/legend';

let legendData = {
	items: [
		'narratives',
		'cotton',
		'sugar'
	],
	selectedItem: this.state.selectedItem || 'narratives'
};

ReactDOM.render(<Legend { ...legendData } onItemSelected={ this.onItemSelected }/>, document.body);
```
