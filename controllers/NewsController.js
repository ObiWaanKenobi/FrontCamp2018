const News = require('../models/news');

class NewsController {
  findAll(req, res) {
    News.find({})
      .then(n => res.send(n))
      .catch(err => console.log(err));
  }

  findById(req, res) {
    const id = req.params.id;

    News.findOne({_id: id})
      .then(n => res.send(n))
      .catch(err => console.log(err));
  }

  create(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }

    const title = req.body.title;
    const content = req.body.content;
    const news = new News({title, content});

    news.save()
      .then(n => res.send(n))
      .catch(err => console.log(err));
  }

  update(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const news = {title, content};

    News.findOneAndUpdate({_id: id}, news, {new: true})
      .then(n => res.send(n))
      .catch(err => console.log(err));
  }

  delete(req, res) {
    const id = req.params.id;

    News.findByIdAndDelete(id)
      .then(n => res.send(n))
      .catch(err => console.log(err));
  }
}

module.exports = NewsController;
