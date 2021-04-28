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

export const ContactForm = props => {
    return (
        <Container>
            <Title>Contact us</Title>
            <SubTitle>We reach you back in a short time</SubTitle>

            <form>
                <div>
                    <FormLabel for="name">Your name</FormLabel>
                    <FormInput type="text" name="name" placeholder="John Doe"/>
                </div>

                <div>
                    <FormLabel for="email">Your email address</FormLabel>
                    <FormInput type="email" name="email" placeholder="email@example.com" />
                </div>

                <div>
                    <FormLabel for="message">Message</FormLabel>
                    <FormInputTextArea name="message" rows="5"></FormInputTextArea>                    
                </div>
            </form>
            <Button text="Send" /> 
            <TextLink text="Cancel" />
        </Container>        
    )
}