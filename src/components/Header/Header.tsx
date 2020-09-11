import React, { useEffect, useState } from 'react'
import { Box, Grid } from 'theme-ui'
import moment from 'moment-timezone'
moment().tz('America/Los_Angeles').format()

const Header = () => {
    const [time, setTime] = useState(moment().tz('Europe/London').format('HH:mm:ss'))
    useEffect(() => {
        const updateTime = () => {
            setTime(moment().tz('Europe/London').format('HH:mm:ss'))
        }

        const interval = setInterval(updateTime, 500)
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <Grid
            sx={{
                paddingX: 6,
                paddingY: 5,
                left: 0,
                top: 0,
                position: 'fixed',
                width: '100%',
                color: 'primary',
            }}
            as="header"
            gap={0}
            width="50%"
        >
            <Box>
                marcosbalbino ©<br />
                selected work 2015 — {new Date().getFullYear()}
            </Box>
            <Box sx={{ textAlign: 'right' }}>London, UK {time}</Box>
        </Grid>
    )
}

export default Header
