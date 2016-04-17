# Panorama toolkit
Suite of visualization-centric components originally developed for [American Panorama](http://dsl.richmond.edu/panorama/), from the Digital Scholarship Lab at the University of Richmond.

[View Examples](http://stamen.github.io/panorama/)

The toolkit is designed for use in the creation of historical maps such as those in the American Panorama Atlas. The components within can be installed via [npm](https://npmjs.com/) and integrated into any web-facing project. Panorama also includes a [template](https://github.com/stamen/panorama-template) that can be used as a starting point for projects that aim to use Panorama components. All of the components within that are "views" (meaning they appear in the DOM) are [React](https://facebook.github.io/react/) components.

For a higher-level overview of the architecture of the [American Panorama](http://dsl.richmond.edu/panorama/) atlas, see: [ARCHITECTURE](ARCHITECTURE.md)

For various server-side database queries that are outside the scope of the toolkit, but which are useful for preparing data for your visualizations, see: [USEFUL QUERIES](USEFUL_QUERIES.md)

---

## Installing components in your project

You might consider starting with the Panorama [template](https://github.com/stamen/panorama-template). Whether or not you do, please follow these instructions to bring the Panorama components into your project.

### Install the correct version of Node.js
Ensure that your Node version matches that present in `.nvmrc`.
[`nvm`](https://github.com/creationix/nvm) is the easiest way to do this,
especially when using projects that require multiple versions of Node (see the
`nvm` repo for installation instructions):

```bash
$ nvm install
Found '/Users/foo/src/stamen/panorama-template/.nvmrc' with version <0.12.7>
######################################################################## 100.0%
Now using node v5.9.1 (npm v3.7.3)
```

NOTE: you'll need to run `nvm install` (or `nvm use`) in each shell instance.

Ensure your npm version is > `3.0` (v2.7+ required for support of npm scoped packages, v3.0+ recommended for dependency resolution):

`npm --version`

If <= `2.7.0`, update npm:

`sudo npm install npm -g`

### Install the toolkit
Then, install the toolkit:

`npm install @stamen/panorama`

---


## Components
The Panorama toolkit comprises a number of components that can be used individually, or wired together with the [Panorama Template](https://github.com/stamen/panorama-template) as a starting point. Below is a list of the components available in the toolkit. Component examples are available [here](http://stamen.github.io/panorama/).

### [AreaChart](./areachart)

### [CartoDBLoader](./cartodb-loader)

### [CartoDBTileLayer](./cartodb-tileLayer)

### [ChartSlider](./chartslider)

### [Choropleth](./choropleth)

### [DiscreteBarChart](./discretebarchart)

### [LeafletChoropleth](./leaflet-choropleth)

### [LeafletDonut](./leaflet-donut)

### [LeafletTooltip](./leaflet-tooltip)

### [HashManager](./hashmanager)

### [HorizontalDiscreteBarChart](./horizontaldiscretebarchart)

### [IntroManager](./intromanager)

### [ItemSelector](./itemselector)

### [Legend](./legend)

### [LineChart](./linechart)

### [Navigation](./navigation)

### [OffsetAreaChart](./offsetareachart)

### [Punchcard](./punchcard)

### [Scatterplot](./scatterplot)

### [TextList](./textlist)

### [TimeBasedMarkers](./timebasedmarkers)
---


## Developing components

Developing new components and modifying existing components requires intermediate knowledge of JavaScript and [React](https://facebook.github.io/react/), as well as basic familiarity with [npm](https://npmjs.com/). To get started, clone this repo, `cd` into the root directory, and install all necessary modules via `npm install`.

All components live in folders that match the name of their npm package; examples of components are in the `_examples/components/` folder. Note that Panorama components are written in ES6 and use Babel to transpile to ES5 JavaScript. Luke Hoban offers [clear examples of features new in ES6](https://github.com/lukehoban/es6features), and Mozilla Developer Network provides a [solid reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).


#### 1. Add the component

To create a new component, add a folder with the name of the component, e.g. `mycomponent/`. Within, create the following file/folder structure:
* `./es6/`: The folder that holds your component's ES6 source files (.js/.jsx); will be transpiled to ES5 in the build step
* `./es6/index.js(x)` The entry point for your component (_Note: if your component is not a view component, it does not need to use React; just create a vanilla JavaScript (`.js`) file. See [`HashManager.js`](./src/HashManager/) for an example._)
* `./_style.scss`: Any required styles for the component (optional)
* `./package.json`: The component will be published to npm on its own, and therefore needs a (minimal) `package.json`. Use the `package.json` of another existing component as a starting point, but be sure to drop the version to `0.1.0` before publishing, and update your `dependencies`.
* `README.md`: See "#2. Add an example and documentation"

When you are ready to test your component, expose its module to the toolkit bundler by adding it to [`./index.js`](./index.js). Follow the `export` pattern used by other components in `index.js`.

##### A note on component design:

As a general rule, React components should be stateless, and should derive their state from `this.props`. [This article](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d) describes the pattern in more detail. Be sure to specify a `static propTypes` block at the top of the class that both documents and enforces the public API of your component. As much as possible, avoid using state (either React's `this.state` or property instances, e.g. `this.someVar`). This ensures maximum flexibility and reusability of your component, and minimizes state-related bugs; state will always flow into the component from the component's parent (usually the root `App.jsx` file).

Try to avoid adding any but the most basic styles to your component's `_style.scss` file. Consumers of your component should be able to customize appearance as desired, so avoid being overly-specific with your CSS rules, and add classes to any elements that might be styled by an end user so that they can be selected in CSS.


#### 2. Add an example and documentation

Add an example for your component to `_examples/`. Create a React component in `_examples/components/` that will load and display your new component. Pass any required and optional props into your new component from this file. Then, `import` your example component into [`_examples/app.js`](./_examples/app.js).

Add documentation for your component as a `README.md` within your component's folder (`./mycomponent/`).


#### 3. Build

To test your component on the examples page, fire up a local development server by running `npm start` from the root directory. The server runs on [http://localhost:8888/](http://localhost:8888/); open a browser to that page to see the examples page.


#### 4. Export

There are a few ways to make your component available to other projects, listed below.

Note that each component is packaged and published in two places: one, on its own (e.g. `@stamen/areachart`) and as part of the toolkit bundle (`@stamen/panorama`). You can import either individual comopnents (e.g. `import AreaChart from '@stamen/areachart'`) or the entire toolkit (e.g. `import { AreaChart } from '@stamen/panorama'`) into your project, whichever you prefer.

Note also that regardless of how you export, component styles (`./_styles.scss` in each component folder) must be manually `@import`ed into your project. See [panorama-template](https://github.com/stamen/panorama-template/blob/master/scss/main.scss#L7-L8) for an example.

##### A. `npm link`

This is the best option for developing a component locally alongside a project that uses it. Link one local project directly to another via `npm link`. The procedure is explained [here](https://docs.npmjs.com/cli/link); basically this involves setting up a system-wide pointer to your local install of `@stamen/panorama` (or of a component within) and then symlinking to that install from your application using the toolkit.

If your downstream project is written in ES6, you can `import` your component by pointing directly at the ES6 entry point and bypass `package.json`:

```
import MyComponent from '@stamen/panorama/mycomponent/es6/index'
```

_One tricky part about `npm link`:_ it also symlinks dependencies from the `node_modules` folder within your linked project, and this can cause conflicts between / multiple copies of dependencies in the toolkit and in your application. Therefore, you'll want to be sure to remove installed `dependencies` from your linked project (`@stamen/panorama` or an indivdual component) before building your downstream project. A sure sign of duplicated dependencies in our little React world is the dreaded `Invariant violation ... you have multiple copies of React loaded` error. If you build your downstream project with sourcemaps enabled, you can look through the source in the browser's debug tools to determine from where the additional copy is being loaded.

##### B. Push builds to GitHub

You can point a project's `package.json` to a GitHub repository in order to pull down and use the `HEAD` of that repo as the dependency. To do this with the Panorama toolkit, you would add this to the `package.json` of your project (not to the toolkit itself!):

```
"dependencies": {
    "@stamen/panorama": "stamen/panorama",
    ...
}
```

To point directly at an individual component:

```
"dependencies": {
    "@stamen/areachart": "stamen/panorama/areachart",
    ...
}
```

##### C. Publish to npm

Once you're satisfied with the state of your new component, and you have a working example in place, it's time to make it available to the npm-using public! The toolkit has scripts (run from the root directory) set up to ease this process. Here's a quick overview of the process automated by those scripts.

##### `npm run publish-module <foldername>`

**Be certain you know what you're doing and are sure the component is in working order before you run this script!** Publishing broken code can break other people's projects if they run `npm install`, and then you will get angry emails from unhappy people 😢😡

*Before running this script, you'll have to be logged into npm with an account marked as a 'collaborator' on the package you're publishing. Contact a `@stamen/panorama` administrator to set this up. Login via [`npm login`](https://docs.npmjs.com/cli/adduser).

This script will automatically bump the toolkit version and publish the repo in its current state to npm. It runs [`_build-config/publish-module.sh`](./_build-config/publish-module.sh), which does these things:

- build the component (transpile `./es6/` into `./es5/`)
- patch the component version (`M.m.p` -> `M.m.(p+1)`)
- commit and push those changes to GitHub
- publish to npm

The script is fairly robust, but if you see any errors, you may need to run these steps manually. They're all visible in [the script](./_build-config/publish-module.sh).

*Note:* at the time of this writing, the component build script bumps the component version in its own `package.json`, but you need to manually bump the version in the toolkit's [`dependencies`](./package.json) in order for the toolkit to pick up those changes.

##### `npm run publish-modules`

**The same warnings apply here as in `npm run publish-module <foldername>` above.** Be careful and avoid 😢😡

This script will automatically bump the toolkit version and publish the repo in its current state to npm. It runs [`_build-config/publish-modules/.sh`](./_build-config/publish-modules.sh), which does these things:

- build all of the components (transpile `./es6/` into `./es5/`)
- patch the toolkit version (`M.m.p` -> `M.m.(p+1)`)
- commit and push those changes to GitHub
- publish to npm

The script is fairly robust, but if you see any errors, you may need to run these steps manually. They're all visible in [the script](./_build-config/publish-modules.sh).

##### `npm run publish:examples`

This script updates the [examples page](http://stamen.github.io/panorama/). It runs [`_build-config/publish-examples.sh`](./_build-config/publish-examples.sh), which simply builds and deploys the examples. There's not much to it, and it's much less risky than `npm run publish-modules`.

*Note:* at the time of this writing, the components are built with Gulp, but the examples are built with Webpack. Sorry! I couldn't easily get Webpack to iterate over each component folder, but the examples Webpack build was already in place from the previous iteration of `@panorama/toolkit`.

---


## Acknowledgements
American Panorama is created by the [Digital Scholarship Lab at the University of Richmond](http://dsl.richmond.edu/). [Stamen Design](http://stamen.com/) designed and developed the initial maps and this toolkit. The [Andrew W. Mellon Foundation](https://mellon.org/) and the [University of Richmond](http://www.richmond.edu/) have generously provided funding for American Panorama.
