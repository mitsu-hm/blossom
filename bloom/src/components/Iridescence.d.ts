declare module '@/components/Iridescence' {
  import { ComponentPropsWithoutRef } from 'react'

  interface IridescenceProps extends ComponentPropsWithoutRef<'div'> {
    color?: [number, number, number]
    speed?: number
    amplitude?: number
    mouseReact?: boolean
  }

  export default function Iridescence(props: IridescenceProps): JSX.Element
}
