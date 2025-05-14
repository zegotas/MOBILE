import { StyleSheet } from "react-native";
import { themas } from "@/src/global/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  caixa1: {
    width: 350,
    height: 200,
    backgroundColor: themas.colors.primary,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    textAlign: "left",
  },
  caixa2: {
    width: 350,
    height: 200,
    backgroundColor: themas.colors.primary,
    borderRadius: 10,
    padding: 10,
    marginBottom: 50,
    textAlign: "left",
  },
  text: {
    fontSize: 14,
    color: "black",
  },
  text2: {
    fontSize: 14,
    color: "black",
  },
  textCpf: {
    fontSize: 14,
    color: "black",
  },
  textTittle: {
    fontSize: 19,
    color: "black",
    marginTop: 2,
  },
  textTittleCpf: {
    fontSize: 19,
    color: "black",
    marginTop: 25,
  },
  textTitlle2: {
    fontSize: 19,
    color: "black",
    marginTop: 2,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});