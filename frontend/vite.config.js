import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts: [
      'yflix.online', // Allow your specific domain
      '.yflix.online', // Use a leading dot to allow subdomains like www.your-custom-domain.com
    ],
    proxy:{
      '/api' : {target:"http://localhost:5010"} // enter your local ipv4 to host on local network
    }
  }
})
