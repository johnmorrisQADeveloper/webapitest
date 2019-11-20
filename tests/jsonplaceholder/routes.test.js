import requestPromise from 'request-promise-native'

describe('All HTTP methods are supported', () => {
  test('GET /Todos/1 should return expected object { userId, id, title, completed }', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/todos/1',
      json: true,
      method: 'GET'
    }
    const response = await requestPromise(options)
    expect(response.userId).toBe(1)
    expect(response.id).toBe(1)
    expect(response.title).toBe('delectus aut autem')
    expect(response.completed).toBe(false)
  })

  test('POST /posts should add a new object { userId, id, title }', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      body: JSON.stringify({
        title: 'this is a new post',
        body: 'new post',
        userId: 101
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
    const response = await requestPromise(options)
    const responseObject = await JSON.parse(response)
    expect(responseObject.title).toBe('this is a new post')
    expect(responseObject.userId).toBe(101)
    expect(responseObject.id).toBe(101)
  })

  test('PUT /posts should update an existing object { userId, id, title }', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'update an existing post item',
        body: 'update',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
    const response = await requestPromise(options)
    const responseObject = await JSON.parse(response)
    expect(responseObject.title).toBe('update an existing post item')
    expect(responseObject.userId).toBe(1)
    expect(responseObject.id).toBe(1)
  })

  test('PUT /DELETE should return an empty {}', async () => {
    var options = {
      uri: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'DELETE'
    }
    const response = await requestPromise(options)
    expect(response).toBe('{}')
  })
})
