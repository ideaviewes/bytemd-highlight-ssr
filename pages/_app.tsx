import '../styles/globals.css'
import 'bytemd/dist/index.css'
import 'github-markdown-css/github-markdown.css';
import "highlight.js/styles/xcode.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
