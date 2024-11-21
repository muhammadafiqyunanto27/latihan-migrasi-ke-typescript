// Database produk sementara (array)
let products: {
    product_id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    category: string;
  }[] = [];
  
  let currentId = 1; // ID unik untuk setiap produk
  
  // Fungsi untuk mendapatkan semua produk
  export const getDataProducts = () => products;
  
  // Fungsi untuk mendapatkan produk berdasarkan ID
  export const getDataProductById = (id: number) =>
    products.find((p) => p.product_id === id);
  
  // Fungsi untuk menambahkan produk baru
  export const addDataNewProduct = (
    name: string,
    price: number,
    stock: number,
    description: string,
    category: string
  ) => {
    const newProduct = {
      product_id: currentId++, // Menambahkan ID unik
      name,
      price,
      stock,
      description,
      category,
    };
    products.push(newProduct); // Menambahkan produk ke array
    return newProduct; // Mengembalikan produk baru
  };
  
  // Fungsi untuk memperbarui produk berdasarkan ID
  export const updateDataProduct = (
    id: number,
    name?: string,
    price?: number,
    stock?: number,
    description?: string,
    category?: string
  ) => {
    const product = products.find((p) => p.product_id === id);
    if (product) {
      product.name = name ?? product.name; // Perbarui nama jika ada
      product.price = price ?? product.price; // Perbarui harga jika ada
      product.stock = stock ?? product.stock; // Perbarui stok jika ada
      product.description = description ?? product.description; // Perbarui deskripsi jika ada
      product.category = category ?? product.category; // Perbarui kategori jika ada
      return product; // Mengembalikan produk yang diperbarui
    }
    return null; // Jika produk tidak ditemukan
  };
  
  // Fungsi untuk menghapus produk berdasarkan ID
  export const deleteDataProduct = (id: number) => {
    const index = products.findIndex((p) => p.product_id === id);
    if (index !== -1) {
      return products.splice(index, 1)[0]; // Menghapus produk dan mengembalikannya
    }
    return null; // Jika produk tidak ditemukan
  };
  