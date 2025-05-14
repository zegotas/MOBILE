import { View, Text, StyleSheet } from 'react-native';

export default function DadosConta() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados da Conta</Text>
      <Text>Email: exemplo@email.com</Text>
      <Text>Celular: (11) 99999-9999</Text>
      <Text>Usuário: joaodasilva</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
