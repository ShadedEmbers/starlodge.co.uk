This is a community project for [StarLodge, Horwich](https://www.google.com/maps/place/Horwich/@53.5969797,-2.5648971,17z/data=!3m1!4b1!4m5!3m4!1s0x487b0915c98de8fb:0xb784f6ea6e975a2b!8m2!3d53.5969097!4d-2.5628628). If you'd like to contribute open a Pull Request in this format: `SL/feature-name` and provide a description on the feature you'd like to contribute.

# starlodge.co.uk

### setup
To setup the project for your local environment clone this repo and checkout to the `dev` branch. <br />
All Pull Requests should originate from the `dev` branch and touch the least amount of existing files possible. 

You Will also need a `.env.local` file which should be configured as follows:
```
NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN=your_mapbox_api_key
```

The live deployment has it's own API keys so no need to worry about your account being charged.

### contributing
This repo uses the following structure for new components:
```
- src
  - components
   - componentName
    - componentName.js
    - componentName.test.js (optional but preferred)
    - index.js
    
```

Your `index.js` file should export an object with your component in a shorthand format e.g: 

```js
import { ComponentName } from './ComponentName';

export {
  ComponentName,

};

```

For a `Page` you will need to follow this structure:
```md
- src
  - pages
    - pageName
      - index.js

```
Your pageName is will be the slug to the root you want to create. Your Page component should also be the default export of your `index.js`

