declare module 'vite-plugin-raw' {
  import { Plugin } from 'vite'

  interface VitePluginRawOptions {
    match?: RegExp
  }

  export default function VitePluginRaw(options?: VitePluginRawOptions): Plugin
}
