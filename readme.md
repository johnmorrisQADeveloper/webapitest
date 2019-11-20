# Resources

## JSONPlaceholder comes with a set of 6 common resources:

| Resources        | Total Count   | 
| -------------    |:------------- | 
|    /posts        | 	100 posts    |
|    /comments     | 	500 comments |
|    /albums       | 	5000 photos  |
|    /todos        | 	200 todos    |
|    /users        | 	10 users     |
	
Note: resources have relations. For example: posts have many comments, albums have many photos, ... see below for routes examples.

# Routes
## All HTTP methods are supported.

| Method           | Route         | 
| -------------    |:------------- | 
|    /POST         | 	 /posts      |
|    /PUT          | 	/posts/1     |
|    /PATCH        | 	/posts/1     |
|    /DELETE       | 	/posts/1     |



docker build -t "webapi:johnmorris" .
docker run -it webapi:johnmorris /bin/bash

