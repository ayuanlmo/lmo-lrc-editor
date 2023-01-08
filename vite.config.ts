import './lmo';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import DevServerConfig from "./src/config/DevServerConfig";
import AppConfig from './src/config/AppConfig';

// @ts-ignore
import * as path from "path";

/** @type {import('vite').UserConfig} */

export default defineConfig({
    base: './',
    plugins: [vue(), vueJsx()],
    build: {
        outDir: AppConfig.Build.Dir,
        assetsDir: '_lmo_static',
        assetsInlineLimit: 4096,
        rollupOptions: {
            output: {
                entryFileNames: 'js/__lmo-js_[name].y.js',
                chunkFileNames: 'js/__lmo-js_[name]-[hash].y.js',
                manualChunks: (item: string): string => {
                    if (item.includes('node_modules'))
                        return item.toString().split('node_modules/')[1].split('/')[0].toString();
                },
                assetFileNames: (info): string => {
                    const option: string = path.basename(info.name);

                    if (option.includes('.css'))
                        return 'css/__lmo-css_[name]-[hash].y.css';
                    if (option.includes('.ttf'))
                        return 'fonts/__lmo-font_[name]-[hash].y.ttf';
                    return `static/__lmo-[ext]_[name].y.[ext]`;
                }
            }
        }
    },
    optimizeDeps: {
        force: true
    },
    server: {
        ...DevServerConfig
    },
    resolve: {
        alias: {
            // @ts-ignore
            "@": path.resolve(__dirname, "src")
        }
    }
});
