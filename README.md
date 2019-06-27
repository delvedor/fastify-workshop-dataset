# fastify-workshop-dataset

Adds a basic dataset to Elasticsearch for workshop and testing purposes.

This module creates a `tweets` index and adds 67 Game of Thrones line tweets to it.<br/>
A tweet is structured as follows:

```
{
  id: String,
  text: String,
  user: String,
  time: DateString,
  topics: String[]
}
```

It will upload the data only if the the `tweets` index is not present.

## Usage

```
npm i @delvedor/fastify-workshop-dataset
```

```js
fastify.register(
  require('fastify-elasticsearch'),
  { node: 'http://localhost:9200' }
)

fastify.register(require('@delvedor/fastify-workshop-dataset'))
```

### Timeline query
This plugin also exposes a `generateTimelineQuery` utility, that helps you create a complex query to get the data ordered by time and boosted by a given array of topics.<br/>
The first argument is the topics array, while the second is the Elasticsearch [`from`](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-from-size.html) parameter.
```js
const query = fastify.generateTimelineQuery(['winter', 'sword'])
```

## License

MIT
