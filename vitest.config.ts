/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'happy-dom',
        includeSource: ['src/**/*.{js.ts}', 'pages/**/*.{ts,jsx,js}'],
        coverage: {
            reporter: ['text', 'html'],
        },
    },
})
