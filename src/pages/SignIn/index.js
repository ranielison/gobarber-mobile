import React from 'react';
import {Image} from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';

import Background from '~/components/Background';
import logo from '~/assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({navigation}) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Sua senha"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <SignLinkText> Criar conta Gratuita </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
