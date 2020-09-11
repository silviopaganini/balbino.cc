import React from 'react'
import { Footer, Section, Header, Projects } from '../'
import ScrollToDiscover from 'components/ScrollToDiscover'

const App = () => {
    return (
        <>
            <Header />
            <Section>
                <Projects />
            </Section>
            <ScrollToDiscover />
            <Footer />
        </>
    )
}

export default App
