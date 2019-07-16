export const imports = {
  'src/column.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-column" */ 'src/column.mdx'
    ),
  'src/container.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-container" */ 'src/container.mdx'
    ),
  'src/padding.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-padding" */ 'src/padding.mdx'
    ),
  'src/row.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-row" */ 'src/row.mdx'
    ),
}
