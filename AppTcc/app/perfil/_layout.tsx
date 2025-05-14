import { Stack } from 'expo-router';

export default function PerfilStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="index" options={{ title: "Perfil" }} />
      <Stack.Screen name="cartoes" options={{ title: "Cartões" }} />
      <Stack.Screen name="dadosConta" options={{ title: "Dados da Conta" }} />
      <Stack.Screen name="endereco" options={{ title: "Endereços" }} />
      <Stack.Screen name="informacoesPessoais" options={{ title: "Informações Pessoais" }} />
    </Stack>
  );
}
