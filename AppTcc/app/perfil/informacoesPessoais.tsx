import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import  { styles } from '../../src/pages/perfil/infPessoais/styles';

export default function InformacoesPessoais() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
       keyboardShouldPersistTaps="handled"
       >
       <View style={styles.container}>
          <View style= {styles.caixa1}>
            <Text style={styles.textTittle}>Nome Completo</Text>
            <Text style={styles.text}>João da Silva</Text>
            <Text style={styles.textTittleCpf}>CPF</Text>
            <Text style={styles.textCpf}>CPF: 123.456.789-00</Text>
          </View>
     
           <View style={styles.caixa2}>     
              <Text style={styles.textTitlle2}>Data de Nascimento</Text>
              <Text style={styles.text2}>12/01/2001</Text>
              <Text style={styles.textTitlle2}>Endereço</Text>
              <Text style={styles.text2}>Rua das Flores, 123</Text>
              <Text style={styles.textTitlle2}>Gênero</Text>
              <Text style={styles.text2}>Masculino</Text>
            </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}