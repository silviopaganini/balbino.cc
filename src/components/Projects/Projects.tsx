import React from 'react'
import { Flex } from 'theme-ui'
import ProjectItem from '../ProjectItem'

const mock = [
    'Fixieast',
    'Design Studios by BCG',
    'Brazilian Feiras',
    'TM Transcedental Meditation',
    'East Side',
    'Rosario 341',
    'Next - Bradesco',
    'Gosha Rubchinskiy',
    'Mastercard',
    'Olympic Games',
    'Samsung Connecta',
    'Itaú Bank',
    'FIAT',
    'Nike',
]

const Projects = () => {
    return (
        <Flex sx={{ minHeight: 'inherit', alignItems: 'center' }}>
            <Flex
                sx={{
                    maxHeight: '40vh',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                {mock.map((m, index) => (
                    <ProjectItem align={index % 2 !== 0 ? 'right' : 'left'} key={index} label={m} />
                ))}
            </Flex>
        </Flex>
    )
}

export default Projects
