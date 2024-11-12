const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categories = await Category.findAll({
    include: [Product],
  });
  // be sure to include its associated Products
  res.json(categories);
});

router.get('/:id', async (req, res) => {

  // find one category by its `id` value
  const category = await Category.findByPk(req.params.id, {
    include: [Product],
  });
res.json(category);  //sends the response back to the client
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category 
  const category = await Category.create(req.body);
  //send the response back to the client
  res.json(category);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const category = await Category.update(req.body, {
    where: {
      id: req.params.id, //match the :id in the route
    },
  });
  //send the response back to the client
  res.json(category);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category = await Category.destroy({
    where: {
      id: req.params.id, //match the :id in the route
    },
  });
  //send the response back to the client
  res.json(category);
});

module.exports = router;
