import React, { useState } from 'react'
import { Heading, Box } from 'theme-ui'
import { motion } from 'framer-motion'

type Align = 'left' | 'right'

type Props = {
    label: string
    align?: Align
}

type PropsIcon = {
    align?: Align
}

const IconHover = ({ align }: PropsIcon) => (
    <Box
        sx={{
            transform: align === 'left' ? null : 'rotate(180deg)',
        }}
    >
        <svg width={47} height={40} viewBox="0 0 47 40" fill="none">
            <path
                d="M27.135 39.222c0-10.763 8.725-19.488 19.488-19.488M46.623 19.488C35.86 19.488 27.135 10.763 27.135 0M45.883 19.734H0"
                stroke="#C1C4B7"
                strokeWidth={5}
            />
        </svg>
    </Box>
)

const AnimHeading = motion.custom(Heading)

const ProjectItem = ({ label, align = 'left' }: Props) => {
    const [state, setState] = useState({ hover: false })
    const onMouseOver = () => {
        setState({ ...state, hover: true })
    }
    const onMouseOut = () => {
        setState({ ...state, hover: false })
    }

    return (
        <Box
            sx={{
                width: '50%',
                justifyItems: align === 'left' ? 'flex-start' : 'flex-end',
                position: 'relative',
            }}
        >
            {state.hover && (
                <Box
                    sx={{
                        position: 'absolute',
                        [align]: 0,
                        top: 12,
                    }}
                >
                    <IconHover align={align} />
                </Box>
            )}
            <AnimHeading
                onMouseOut={onMouseOut}
                onMouseOver={onMouseOver}
                animate={{ x: state.hover ? (align === 'left' ? 60 : -60) : 0 }}
                sx={{
                    cursor: 'pointer',
                    textAlign: align,
                    color: state.hover ? 'primary' : 'text',
                }}
                variant="projectItem"
            >
                {label}
            </AnimHeading>
        </Box>
    )
}

export default ProjectItem
