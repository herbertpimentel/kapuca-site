
import react, { useState } from 'react';

import Link  from 'next/link';

import { 
    Container, 
    Title, 
    SubTitle, 
    FormLabel, 
    FormInput, 
    FormInputTextArea, 
    Button, 
    TextLink 
} from '../components/styled'

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault()

        fetch('/api/sendemail', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name,
              email,
              text
          })
        });
    }
    
    return (
        <Container>
            <Title>Contact us</Title>
            <SubTitle>We reach you back in a short time</SubTitle>

            <form>
                <div>
                    <FormLabel for="name">Your name</FormLabel>
                    <FormInput type="text" name="name" placeholder="John Doe" onChange={e => setName(e.target.value)} />
                </div>

                <div>
                    <FormLabel for="email">Your email address</FormLabel>
                    <FormInput type="email" name="email" placeholder="email@example.com" onChange={e => setEmail(e.target.value)}  />
                </div>

                <div>
                    <FormLabel for="message">Message</FormLabel>
                    <FormInputTextArea name="message" rows="5" onChange={e => setText(e.target.value)} ></FormInputTextArea>                    
                </div>
            </form>
            
            <Button onClick={handleSubmit}>Send</Button> 

            <Link href="/">
                <TextLink text="Cancel" />
            </Link>
        </Container>        
    )
}