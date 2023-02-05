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
                manualChunks: {
                    core: ['vue', 'vuex'],
                    index: ['/src/main.ts'],
                    main: ['/src/Root.tsx'],
                    utils: ['/src/utils/index.ts'],
                    config: ['/src/config/AppConfig.ts'],
                    animate: ['/src/style/animate.min.css'],
                    'lmo-style': ['/src/style/lmo-style.scss']
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
    preview: {
        port: 8081,
        host: 'localhost',
        open: true
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
