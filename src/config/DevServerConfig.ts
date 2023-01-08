const DevProxy: object = {};

export default {
    port: 8080,
    open: false,
    http: true,
    host: true,
    ssr: false,
    proxy: {
        ...DevProxy
    }
};