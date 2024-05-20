interface Move {
    move: {
        name: string
        url: string
    }
}

export interface PokemonShort {
    name: string
    url: string
}

export interface PokemonProps {
    name: string
    stats: number
    frontSprite: string
    backSprite: string
    primaryType: string
    moves: Move[]
}