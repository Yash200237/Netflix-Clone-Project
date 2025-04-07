# 🎬 Netflix Clone Project

A full-stack Netflix clone application built with **React**, **Node.js**, **Express**, and **MongoDB**. This project replicates the core functionalities of Netflix, including user authentication, movie/TV show search, and a watch page.

---

##  Features

- 🔐 **User Authentication**: Signup, login, and logout functionality with secure password hashing and JWT-based authentication.  
- 🔎 **Search Functionality**: Search for movies, TV shows, and actors.  
- 🕒 **Search History**: View and manage your search history.  
- ▶️ **Watch Page**: Watch movies or TV shows with dynamic content loading.  
- 📱 **Responsive Design**: Fully responsive UI for desktop and mobile devices.  
- ⚠️ **Error Handling**: Custom 404 page and toast notifications for errors.  


---

## 🛠️ Tech Stack

### 🧑‍💻 Frontend:
- ⚛️ **React**: For building the user interface.  
- 🧭 **React Router**: For routing and navigation.  
- 🧠 **Zustand**: For state management.  
- 🎨 **Tailwind CSS**: For styling.  
- 🌐 **Axios**: For making API requests.  
- 🔔 **React Hot Toast**: For notifications. 

### 🧪 Backend:
- 🟢 **Node.js**: For server-side logic.  
- 🚂 **Express**: For building RESTful APIs.  
- 🍃 **MongoDB**: For the database.  
- 🧩 **Mongoose**: For MongoDB object modeling.  
- 🔐 **JWT**: For authentication.  
- 🧂 **Bcrypt.js**: For password hashing.  
---

###  Environment Setup


Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
MONGO_URI=your_mongo_uri
NODE_ENV=development
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
```
Replace the placeholder values (your_mongo_uri, your_jwt_secret, your_tmdb_api_key) with your actual credentials.

## Running the App Locally
1. Install dependencies
```bash
npm install
```
2. Build the application
``` bash
npm run build
```
3. Start the application
``` bash
npm run start
```

The app should now be running on http://localhost:5000 (or the port you specified in .env).

##  Hosted Version
You can access the live version of the app here:

🔗 https://netflix-clone-project-2.onrender.com/




