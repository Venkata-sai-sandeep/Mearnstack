import React from 'react'

const Header = ({ object }) => {
    return (
        <h2>{object.name}</h2>
    )
}

const Part = (pro) => {
    return (
        <p>
            {pro.part.name} {pro.part.exercises}
        </p>
    )
}

const Content = ({ object }) => {
    return (
        <div>
            {object.parts.map((part) => <Part part={part} />)}
        </div>
    )
}

const Total = ({ object }) => {
    const sum = object.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <strong>Number of exercises {sum}</strong>
    )
}

const Shadow = ({ object }) => {
    return (
        <>
            <Header object={object} />
            <Content object={object} />
            <Total object={object} />
        </>
    )
}

export default Shadow