import React from 'react'
import { CardItem } from './styles'

function Card({ photo, path }) {
    return (
        <CardItem>
            <a href={path} target="_blank">
                <img src={photo} alt="" />
            </a>
        </CardItem>
    )
}

export default Card