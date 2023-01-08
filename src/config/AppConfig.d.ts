declare const AppConfig :{
    AppName: string;
    AppAuthor: string;
    AppTitle: string;
    StorageOptions: {
        Namespace: string;
        Storage: string;
    },
    BaseUrl: string;
    Build: {
        Dir: string;
    },
    Pages: {
        welcome: boolean;
    },
    OpenSource: {
        github: string;
    }
};
export default AppConfig;