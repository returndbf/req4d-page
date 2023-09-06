import {Key, ReactNode} from "react";

export interface RouterItem {
    path: string
    title: string
    element: ReactNode
    children: Array<Partial<RouterItem>>
    isTopic: boolean
    key:Key | null | undefined
}

export type PartialRouterItem = Partial<RouterItem>
