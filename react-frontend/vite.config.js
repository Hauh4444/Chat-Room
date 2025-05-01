// External Libraries
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Vite configuration
export default defineConfig({
    plugins: [react()],

    // Resolving paths to make imports cleaner
    resolve: {
        alias: {
            // Alias for the src directory
            '@': '/src', // Any import starting with '@' will be resolved to the 'src' directory
        },
    },
})
