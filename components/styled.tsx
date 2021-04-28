import styled from 'styled-components'

export const KapucaLogo = styled.div`
    display: block;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 600px;    
`

export const Title = styled.h1`
   color: #fcfcfc;
    font-size: 40px;
    text-align: center;
    line-height: 1.1em;
    margin-top: 30px;
`;

export const SubTitle = styled.p`
    font-size: .9em;
    font-weight: 300;
    margin-top: 10px;
`;

export const Button = styled.button`
    width: 320px;
    margin-top: 20px 0;
    padding: 12px;
    font-size: 14px;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, 
        rgba(131,58,180, .5) 0%, 
        rgba(253,29,29, .6) 50%, 
        rgba(252,176,69,.8) 100%
    );            

`;


export const FormLabel = styled.label`
    display: block;
    font-weight: 600;
    font-size: 0.9em;
`;

export const FormInput = styled.input`
    width: 300px;
    min-height: 40px;
    padding: 2px 8px;
    margin-bottom: 12px;

`;

export const FormInputTextArea = styled.textarea`
    width: 300px;
    min-height: 40px;
    padding: 2px 8px;
    margin-bottom: 12px;
`
export const TextLink = styled.a`
    margin-top: 10px;
    cursor: pointer;
`