import { CSSProperties, PropsWithChildren } from 'react'

export interface CommonComponentProps extends PropsWithChildren {
  name: 'string'
  id: number
  styles?: CSSProperties
  [key: string]: any
}
