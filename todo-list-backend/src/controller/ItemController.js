const Item = require('../models/Item')

module.exports = {
  async index(request, response) {
    return response.json(await Item.find({}))
  },
  async store(request, response) {
    const {
      description
    } = request.body

    const item = await Item.create({
      description: description,
      checked: false
    })

    return response.json(item)
  },
  async update(request, response) {
    const {
      idItem
    } = request.params

    const {
      description,
      checked
    } = request.body

    const item = {
      description: description,
      checked: checked
    }

    const updatedItem = await Item.findByIdAndUpdate(idItem, item, {
      new: true
    })

    return response.json(updatedItem)
  },
  async destroy(request, response) {
    const {
      idItem
    } = request.params

    const removedItem = await Item.remove({
      _id: idItem
    })

    return response.json(removedItem)
  }
}