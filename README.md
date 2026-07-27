# Let's Go! React with Go Complete Fullstack App - TypeScript, React Query, MongoDB, ChakraUI

![Demo App](https://i.ibb.co/JvRTWmW/Group-93.png)

[Video Tutorial on Youtube](https://youtu.be/zw8z_o_kDqc)

Some Features:

- ⚙️ Tech Stack: Go, React, TypeScript, MongoDB, TanStack Query, ChakraUI
- ✅ Create, Read, Update, and Delete (CRUD) functionality for todos
- 🌓 Light and Dark mode for user interface
- 📱 Responsive design for various screen sizes
- 🌐 Deployment
- 🔄 Real-time data fetching, caching, and updates with TanStack Query
- 🎨 Stylish UI components with ChakraUI
- ⏳ And much more!

### .env file

```shell
MONGO_URI=<your_mongo_uri>
PORT=5000
ENV=development
```

### Compile and run

```shell
go run main.go
```

### Seed the database

To populate the `todos` collection with sample data, run the `scripts/seed.js` script with `mongosh`, using the same `MONGODB_URI` from your `.env` file:

```shell
mongosh "$MONGODB_URI" scripts/seed.js
```

This clears the `todos` collection and inserts a few example tasks.
