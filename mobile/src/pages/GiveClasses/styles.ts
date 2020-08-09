import { StyleSheet } from "react-native";

//Styled Components - Olhar youtube rocket

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupar a tela toda
    backgroundColor: "#8257E5",
    justifyContent: "center",
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: "#D4C2FF",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    maxWidth: 240,
  },
});

export default styles;
