import { PropsWithChildren } from "react";

export interface CommonComponentProps extends PropsWithChildren {
    name: 'string',
    id: number,
    [key:string]:any
}