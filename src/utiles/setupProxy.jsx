import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    createProxyMiddleware('/users', {
      target: 'https://{url}',
      changeOrigin: true,
    }),
  );
};