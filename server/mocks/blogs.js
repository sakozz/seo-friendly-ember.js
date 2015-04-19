module.exports = function(app) {
  var express = require('express');
  var blogsRouter = express.Router();

  blogsRouter.get('/', function(req, res) {
    res.send({
      'blogs': [
        {  
          id         : "54ef078453756e0c6d070000",
          title      : "white deer",
          body       : "Heyy Man, do you know that Parallel lines have so much in common?",
          user_id    : "54e1e4e453756e5578010000",
          created_at : "2015-01-26T11:46:13.007Z"
        },
        {
          id         : "54f0895b53756e811b070000",
          title      : "black tiger",
          body       : "Yea, It's a shame they will never meet :)",
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
