import { ThemeInterface } from "../types/ThemeType";

export default <ThemeInterface>{
    id: '00',
    name: "dark",
    backgrounds: {
        body: "#000000",
        card: "#1e1f20",
        button: {
            // primary: '#58dd93',
            primary: {
                normal: '#40b975',
                hover: '#58cf8c'
            },
            secondary: {
                normal: '#f9fdf7',
                hover: '#ffffff'
            },
        }
    },
    colors: {
        body: "#ffffff",
        button: "#ffffff",
        link: "#ffffff",
    },
    fonts: {
        // body: "'Akaya Telivigala', cursive"
        body: "'Montserrat', sans-serif",
        // body: "'Ubuntu', sans-serif"
    }
}