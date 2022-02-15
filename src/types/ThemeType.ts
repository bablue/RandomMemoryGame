export interface ThemeInterface {
    id: string;
    name: string;
    backgrounds: {
        body: string;
        card: string;
        button: {
            primary: {
                normal: string;
                hover: string;
            },
            secondary: {
                normal: string;
                hover: string;
            },
        }
    },
    colors: {
        body: string;
        button: string;
        link: string;
    },
    fonts: {
        body: string;
    }
}