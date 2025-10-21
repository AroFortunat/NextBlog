import axios from 'axios';

// Créer une instance Axios configurée
const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:4000', // Remplacez par votre URL de base
  timeout: 5000, // Optionnel : définir un délai d'expiration
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;