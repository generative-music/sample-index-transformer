# sample-index-transformer

Transforms sample file indices.

## Usage

This package exports a function which requires an object parameter that adheres to the schema defined in [@generative-music/sample-index-schema], an array of sample group names to transform, and a transformation function.

```javascript
import transform from '@generative-music/sample-index-transformer';

const sampleIndex = {
  piano: {
    C4: 'url/to/c4.wav',
    C5: 'url/to/c5.wav',
  },
  drum: ['url/to/hit/1.wav', 'url/to/hit/2.wav'],
};

transform(sampleIndex, ['piano'], window.fetch).then((fetchIndex) => {
  const { piano } = fetchIndex;
  console.log(piano); // { C4: <Response>, C5: <Response> }
});
```

### `transform()`

A function which applies a given transformation to the specified samples within a sample index group.

#### Syntax

```javascript
const transformationPromise = transform(
  sampleIndex,
  sampleNames,
  transformation
);
```

##### Parameters

- `sampleIndex` _(Optional)_: An object which adheres to the schema defined in [@generative-music/sample-index-schema]. Defaults to an empty object (`{}`).
- `sampleNames` _(Optional)_: An array of strings which correspond to property names in `sampleIndex`. The samples associated with these property names will be transformed and returned. Defaults to an empty array (`[]`).
- `transformation` _(Optional)_: A function which will be called for every sample value from `sampleIndex` and selected by `sampleNames` and returns a `Promise`. Defaults to `(value) => Promise.resolve(value)`.

##### Return value

A `Promise` which resolves to an object that adheres to the schema defined in [@generative-music/sample-index-schema]. Only properties specified by `sampleNames` will be present, with the resolved values from `transformation` as the sample values.

[@generative-music/sample-index-schema]: https://github.com/generative-music/sample-index-schema
