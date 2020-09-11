import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

const Section: FunctionComponent = ({ children }) => {
    return (
        <Box
            as="section"
            sx={{
                minHeight: 'inherit',
                position: 'relative',
            }}
        >
            {children}
        </Box>
    )
}

export default Section
