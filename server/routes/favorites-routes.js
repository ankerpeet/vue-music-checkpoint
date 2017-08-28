var express = require('express')
var router = express.Router()
let lists = require('../models/favorites-list')
let Users = require('../models/user')


//Dev purposes
router
  .get('/', (req, res, next) => {
    lists.find({})
      .then(lists => {
        res.send(lists)
      })
      .catch(next)
  })
  .delete('/:id', (req, res, next) => {
    lists.findByIdAndRemove(req.params.id)
      .then(lists => {
        res.send(lists)
      }).catch(next)
  })

router
  .get('/:id', (req, res, next) => {
    lists.findById(req.params.id)
      .then(lists => {
        res.send(lists)
      }).catch(next)
  })
  .post('/', (req, res, next) => {
    lists.create(req.body)
      .then(list => {
        if (req.session.uid) {
          console.log(list)
          res.send(list)
        }
      }).catch(next)
  })
  .put('/:id', (req, res, next) => {
    var id = req.params.id
    lists.findByIdAndUpdate(id, req.body)
      .then(list => {
        if (req.session.uid) {
          res.send({ message: 'Successfully Updated' })
        }
      }).catch(next)
  })

// ERROR HANDLER
router.use('/', (err, req, res, next) => {
  if (err) {
    res.send(418, {
      success: false,
      error: err.message
    })
  } else {
    res.send(400, {
      success: false,
      error: 'Something failed please try again later'
    })
  }
})

module.exports = router
