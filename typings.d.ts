declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

interface Params {
  url: string, wrapX: boolean
}
// declare module '@supermap/iclient-ol' {
//   export class TileSuperMapRest {
//     constructor(params: Params)
//   }
// }
declare module '@supermap/iclient-ol';
