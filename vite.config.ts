import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: "./",
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          sobre: resolve(__dirname, 'sobre.html'),
          areas: resolve(__dirname, 'areas.html'),
          equipe: resolve(__dirname, 'equipe.html'),
          conteudos: resolve(__dirname, 'conteudos.html'),
          contato: resolve(__dirname, 'contato.html'),
          privacidade: resolve(__dirname, 'privacidade.html'),
          termos: resolve(__dirname, 'termos.html')
        }
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
