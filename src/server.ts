import express, { Request, Response } from "express";
import {
  getDataProducts,
  getDataProductById,
  addDataNewProduct,
  updateDataProduct,
  deleteDataProduct,
} from "./product";

const app = express();
app.use(express.json());
    
// Mendapatkan semua produk
app.get("/products", (req: Request, res: Response) => {
  res.json(getDataProducts());
});

// Mendapatkan produk berdasarkan ID
app.get("/products/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const product = getDataProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Produk tidak ditemukan" });
  }
});

// Menambahkan produk baru
app.post("/products", (req: Request, res: Response) => {
  const { name, price, stock, description, category } = req.body;
  const newProduct = addDataNewProduct(name, price, stock, description, category);
  res.status(201).json(newProduct);
});

// Memperbarui produk berdasarkan ID
app.put("/products/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { name, price, stock, description, category } = req.body;
  const updatedProduct = updateDataProduct(id, name, price, stock, description, category);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Produk tidak ditemukan" });
  }
});

// Menghapus produk berdasarkan ID
app.delete("/products/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const deletedProduct = deleteDataProduct(id);
  if (deletedProduct) {
    res.json(deletedProduct);
  } else {
    res.status(404).json({ message: "Produk tidak ditemukan" });
  }
});

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
