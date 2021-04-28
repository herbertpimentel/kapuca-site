import react from 'react';

import { Container, Title, SubTitle, TextLink } from '../components/styled'

export default function ConfirmationPage() {
    return (
        <Container>
            <Title>Done!</Title>
            <SubTitle>No worries, we are really really fast</SubTitle>
                
            <TextLink text="Return" />
        </Container>
    )
}

