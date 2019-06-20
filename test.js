'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const elasticsearch = require('fastify-elasticsearch')
const dataset = require('./index')

test('Should register the plugin and index the data', async t => {
  const fastify = Fastify()
  fastify
    .register(elasticsearch, { node: 'http://localhost:9200' })
    .register(dataset)

  await fastify.ready()

  t.type(fastify.generateTimelineQuery, 'function')

  const { body } = await fastify.elastic.count({ index: 'tweets' })
  t.match(body, { count: 90 })

  await fastify.close()
})
