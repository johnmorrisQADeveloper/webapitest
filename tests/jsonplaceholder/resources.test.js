const requestPromise = require('request-promise-native')

describe('All HTTP methods are supported', () => {
  test('GET /posts should return 100 elements in JSON object', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/posts',
      json: true,
      method: 'GET'
    }
    const response = await requestPromise(options)
    expect(response.length).toBe(100)
  })

  test('GET /comments should return 500 elements in JSON object', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/comments',
      json: true,
      method: 'GET'
    }
    const response = await requestPromise(options)
    expect(response.length).toBe(500)
  })

  test('GET /comments should return 500 elements in JSON object', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/comments',
      json: true,
      method: 'GET'
    }
    const response = await requestPromise(options)
    expect(response.length).toBe(500)
  })

  test('GET /albums should return 100 elements in JSON object', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/albums',
      json: true,
      method: 'GET'
    }
    const response = await requestPromise(options)
    expect(response.length).toBe(100)
  })

  test('GET /photos should return 5000 elements in JSON object', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/photos',
      json: true,
      method: 'GET'
    }
    const response = await requestPromise(options)
    expect(response.length).toBe(5000)
  })

  test('GET /todos should return 200 elements in JSON object', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/todos',
      json: true
    }
    const response = await requestPromise(options)
    expect(response.length).toBe(200)
  })

  test('GET /users should return 10 elements in JSON object', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/users',
      json: true,
      method: 'GET'
    }
    const response = await requestPromise(options)
    expect(response.length).toBe(10)
  })
})
