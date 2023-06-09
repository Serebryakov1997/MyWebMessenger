import { resolve } from 'path';
import { defineConfig } from "vite";
import handlebars from './vite-plugin-handlebars-precompile';

console.log('__dirname src: ', resolve(__dirname, 'src'));
export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        // outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            }
        }
    },
    plugins: [handlebars()],
});