import Head from 'next/head'
import Link from 'next/link';

import { Container, Title, SubTitle, KapucaLogo, Button } from '../components/styled'

export default function Home() {
  return (
        <Container>
            <KapucaLogo />
            <Title>We build your software</Title>
            <SubTitle>We delivery high quality products</SubTitle>
            
            <Link href="/contact">
                <Button>Contact us</Button>
            </Link>
        </Container>
    )
}

