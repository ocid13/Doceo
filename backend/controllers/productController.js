import * as Product from '../models/productModel.js'

export const getAll = async (req, res) => {
  try {
    const result = await Product.getAllProducts()
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await Product.getProductById(id)

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const create = async (req, res) => {
  try {
    const { name, price } = req.body

    if (!name || !price) {
      return res.status(400).json({ message: 'name & price wajib' })
    }

    const result = await Product.createProduct(name, price)
    res.status(201).json(result.rows[0])
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params
    const { name, price } = req.body

    const result = await Product.updateProduct(id, name, price)

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const remove = async (req, res) => {
  try {
    const { id } = req.params

    const result = await Product.deleteProduct(id)

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json({ message: 'Product deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}