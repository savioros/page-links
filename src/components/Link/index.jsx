import React from 'react'
import { LinkItem } from './styles'

function Link({ children, path, ...props }) {
    return (
        <LinkItem href={path} target="_blank" {...props}>{children}</LinkItem>
    )
}

export default Link