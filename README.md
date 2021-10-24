# better-ytsr

better-ytsr is library that upgrade filter feature from [node-ytsr](https://github.com/TimeForANinja/node-ytsr) (ytsr is original package and dependency)

## Install

NPM:

```console
npm install --save better-ytsr
```

Yarn:

```console
yarn add better-ytsr
```

## Example

```js
const ytsr = require("better-ytsr");

// below line should be inside of async function
const result = await ytsr("search query");
```

## API (Filter options that added in this package)

### [More functions, detail in original API documentation (node-ytsr)](https://github.com/TimeForANinja/node-ytsr/blob/master/README.md#api)

### betterytsr(searchString, [options])

Searches for the given string

* searchString
  * search string to search from
* options
  * object with options
  * "gl", "hl", "safeSearch", "limit", "pages", "requestOptions" (from node-ytsr)
  * exactMatch[Boolean] -> search for actual search query when youtube auto changes searchquery. (when youtube says 'Search Instead for')
  * filters[Object] -> exact same with Youtube filters **filter value is case-insensitive**
    * uploadDate[String]: `Last hour`, `Today`, `This week`, `This month`, `This year`
    * type[String]: `Video`, `Channel`, `Playlist`, `Movie`
    * duration[String]: `Under 4 minutes`, `4 - 20 minutes`, `Over 20 minutes`
    * features[Array or String] (can be multiple): `Live`, `4K`, `HD`, `Subtitles/CC`, `Creative Commons`, `360`, `VR180`, `3D`, `HDR`, `Location` (Not sure if it works), `Purchased` (Not sure if it works)
    * sortBy[String]: `Relevance` (default value, same with none option), `Upload date`, `View count`, `Rating`

Example:

```js
const ytsr = require("better-ytsr");

async function query(q) {
  const result = await ytsr(q, { hl: 'ko', gl: 'KR', pages: 1, filters: { type: 'Video', features: ['4K', 'Subtitles/CC'] } });

  return result;
}

console.log(query('battlefield 2042 trailer'))
```

function `ytsr.getFilters` is not included in this package.

## License

MIT
