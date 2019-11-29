# random-react-lib-via-typescript
## What
This is a template for building tested react components in typescript.

The component can be used in any React app (typescript or otherwise).

(_A typescript Interface is also exported. It's the prop type that the component takes.
This is a useful type defination when the librayr is used in a trypscript app_)

## How to use
Normally a person would `npm install random-react-lib-via-typescript` but this is not a published module. It's a template for building React npm libraries.

`npm test` runs the jest tests but to test it locally in another app, do the follwoing:

1. Clone it to a folder 
2. run `npm install` 
3. then `npm build`. This will populate all the built JS to the `build` folder.
4. Have your own app, the app that will use this library in  afolder beside this one.
5. Then in package.json along with other dependencies include it via `file:`


```json
"dependencies": {
    "random-react-lib-via-typescript": "file:../random-react-lib-via-typescript",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
     ......
}
```

Alternatively it can be included as a dependency after doing an `npm pack` e.g. https://medium.com/@vcarl/problems-with-npm-link-and-an-alternative-4dbdd3e66811


Then in the app that will use it
```typescript
import RedText from "random-lib";
import { IRedTextProps } from "random-lib"; //typescript

const props:IRedTextProps = { text: "World" }; 
```
```html
<RedText {...props} />
```

## Watch Mode
`npm run watch` will watch for changes and build this library on each change. 

If you've got an app referencing this lib via `file: ../random-react-lib-via-typescript` then that app will automatically update when this library builds.


