# 🛒 E-Commerce React App

This is a fully functional e-commerce web application built with **React**. It includes features such as product browsing, search functionality, cart management, and user authentication.

## 🚀 Live Demo

👉 [View Live Site](https://your-live-link.vercel.app)  
*(Replace with deployed link)*

---

## ✨ Features

- 🛍️ Display products fetched from an external API
- 🔍 Product detail pages with dynamic routing
- 🛒 Add to Cart functionality
- 🔐 User authentication (coming soon)
- 📱 Fully responsive layout
- ⚡ Fast performance and clean UI

---

## 🧰 Tech Stack

- ⚛️ **Frontend**: React, React Router, React Icons
- 🎛️ **State Management**: React Hooks (`useState`, `useEffect`)
- 🌐 **API Integration**: Fetch API
- 🎨 **Styling**: CSS
- 💾 **Persistence**: `localStorage`

---

## 📸 Screenshots

| Home Page | Product Details | Cart |
|-----------|-----------------|------|
| ![Home](./screenshots/home.png) | ![Details](./screenshots/details.png) | ![Cart](./screenshots/cart.png) |

> Add actual screenshots in a `screenshots/` folder and reference them.

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/webcodeed/e-commerce-react.git
cd e-commerce-react
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

---

## 📂 Folder Structure
```
e-commerce-react/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
---

## 🌐 API Endpoints

This project uses the [DummyJSON API](https://dummyjson.com/) for fetching product data. Below are the key endpoints used:

- 📦 **Product List:**: \`https://dummyjson.com/products\`
- 🛍️ **Product Details**: \`https://dummyjson.com/products/{id}\`
- 🔍 **Search Products**: \`https://dummyjson.com/products/search?q={query}\`
- 🗂️ **Categories**: \`https://dummyjson.com/products/categories\`
- 🛒 **Add to Cart**: \`https://dummyjson.com/carts/{id}\`
---

## 📝 How to Use

1. **Browse Products**: Navigate through the product list on the homepage.
2. **Search**: Use the search bar in the navigation to find specific products.
3. **View Details**: Click on a product to view its details, including reviews.
4. **Add to Cart**: Adjust the quantity and add items to your cart.
5. **Like Products**: Click the ❤️ icon to like/unlike products, which are saved in \`localStorage\`.
---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m \"Add feature description\"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
---

## 🙋‍♂️ Author

Otegbade Ayomide  
Frontend Developer

🔗 [GitHub](https://github.com/webcodeed)  

🔗 [LinkedIn](https://www.linkedin.com/in/ote-ayo)

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [DummyJSON API](https://dummyjson.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---
Happy coding! 🚀
