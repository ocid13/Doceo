import { pool } from '../config/db.js'

export const getAllProducts = async () => {
  return await pool.query('SELECT * FROM products ORDER BY id DESC')
}

export const getProductById = async (id) => {
  return await pool.query('SELECT * FROM products WHERE id = $1', [id])
}

export const createProduct = async (name, price) => {
  return await pool.query(
    'INSERT INTO products(name, price) VALUES($1,$2) RETURNING *',
    [name, price]
  )
}

export const updateProduct = async (id, name, price) => {
  return await pool.query(
    'UPDATE products SET name=$1, price=$2 WHERE id=$3 RETURNING *',
    [name, price, id]
  )
}

export const deleteProduct = async (id) => {
  return await pool.query(
    'DELETE FROM products WHERE id=$1 RETURNING *',
    [id]
  )
}