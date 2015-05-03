module.exports = function(app) {
  var express = require('express');
  var blogsRouter = express.Router();

  blogsRouter.get('/', function(req, res) {
    res.send({
      'blogs': [
        {  
          id         : "54ef078453756e0c6d070000",
          title      : "white deer",
          body       : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          user_id    : "54e1e4e453756e5578010000",
          created_at : "2015-01-26T11:46:13.007Z"
        },
        {
          id         : "54f0895b53756e811b070000",
          title      : "black tiger",
          body       : "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          user_id    : "54dce2f453756ec9220a0000",
          created_at : "2015-02-27T15:12:27.637Z"
        }
      ] 
    });
  });

  blogsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  blogsRouter.get('/:id', function(req, res) {
    res.send({
      'blogs': {
        id: req.params.id
      }
    });
  });

  blogsRouter.put('/:id', function(req, res) {
    res.send({
      'blogs': {
        id: req.params.id
      }
    });
  });

  blogsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/blogs', blogsRouter);
};
