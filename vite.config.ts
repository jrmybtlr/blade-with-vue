import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import useClassy from 'vite-plugin-useclassy';
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.ts',
                'resources/js/web-components.ts'
            ],
            refresh: true,
        }),
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.includes('-')
                }
            }
        }),
        useClassy({
            language: 'blade',
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    build: {
        rollupOptions: {
            input: {
                app: 'resources/js/app.ts',
                webComponents: 'resources/js/web-components.ts'
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    return chunkInfo.name === 'webComponents' ? 'web-components/[name].js' : '[name].js';
                },
                chunkFileNames: 'web-components/[name].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'web-components/[name].[ext]';
                    }
                    return '[name].[ext]';
                }
            }
        }
    }
});
