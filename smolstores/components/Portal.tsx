import {ReactNode} from 'react'
export default function Portal(props: {children: ReactNode}) {
    const {children} = props
    return (
        <div className="portal">
            {children}
        </div>
    )
}