import './index.css'
export default function RootLayout({children}) {
    return(
        <html>
            <body>{children}</body>
        </html>
    )
}