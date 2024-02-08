import { defineConfig } from 'vite';

export default defineConfig({
    //root       : './games/mines/',
    plugins    : [],
    server     : { host: '0.0.0.0', port: 8000 },
    clearScreen: false,
});
