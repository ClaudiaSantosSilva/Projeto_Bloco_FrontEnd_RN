import { View, Text, Image, StyleSheet } from "react-native";

export default function Card({
  idCarrossel,
  numeroCard,
  titulo,
  subtitulo,
  pontuacao,
  iconeAdicionar,
  valor,
  imgemSrc,
  style,
}) {
  const idDoCard = `carrossel-${idCarrossel}-card-${numeroCard}`;

  return (
    <View style={styles.card_container} accessibilityLabel={idDoCard}>
      <View style={styles.card_image}>
        <Image source={{ uri: imgemSrc }} alt={titulo} style={styles.image} />
      </View>
      <View style={styles.card_info}>
        <View style={styles.card_titulo}>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>

        <View style={styles.card_subtitle}>
          <FontAwesome name="building" size={16} color="black" />
          <Text>{subtitulo}</Text>
        </View>
        <View style={styles.card_pontuacao}>
          <FontAwesome name="star" size={16} color="gold" />
          <Text>{pontuacao}</Text>
          <Text style={styles.reviews}>(Reviews)</Text>
        </View>
        <View style={styles.card_options}>
          {/* <View style={styles.card_icone}> */}
            <Image
              source={{ uri: iconeAdicionar }}
              style={{ width: 24, height: 24 }}
            />
          {/* </View> */}
          <View>
            <MaterialIcons name="directions-car" size={20} color="black" />
            <MaterialIcons name="directions" size={20} color="black" />
          </View>
        </View>
        <View style={styles.card_valor}>
          <Text>{valor}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card_container: {
    width: 342,
    height: 134,
    borderRadius: 32,
    opacity: 1,
    backgroundColor: "#d6e6da",
    flexDirection: "row", 
  },
  card_image: {
    width: 121.5,
    height: 134,
    borderRadius: 32,
    opacity: 1,
  },
  image: {
    width: 121.5,
    height: 134,
    borderRadius: 32,
    opacity: 1,
  },
  card_info: {
    width: 220.5,
    height: 134,
    marginTop: 19,
  },
  card_titulo: {
    justifyContent: "flex-start",
    width: 210.54,
    height: 26,
    opacity: 1,
    marginLeft: 10.21,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16, // 100% do fontSize
    color: "#000000",
  },
  card_subtitle: {
    width: 180,
    height: 17,
    flexDirection: "row",
    gap: 6, 
    alignItems: "center",
  },
//   subtitle_text: {
//     fontSize: 12,
//     fontWeight: "400",
//     lineHeight: 12,
//     color: "#000",
//   },
  card_pontuacao: {
    width: 180,
    height: 17,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    marginTop: 6,
  },
//   pontuacao_text: {
//     fontSize: 12,
//     fontWeight: "400",
//     lineHeight: 12,
//     color: "#000",
//   },
  reviews: {
    textDecorationLine: "underline",
  },
  card_options: {
    width: 100,
    height: 17,
    flexDirection: "row",
    gap: 6,
    marginLeft: 9.75,
    marginTop: 4,
  },
  card_valor: {
    width: 210.54,
    height: 21,
    marginTop: 4,
    marginLeft: 9.75,
    justifyContent: "flex-start",
  },
//   valor_text: {
//     fontSize: 20,
//     fontWeight: "500",
//     lineHeight: 20,
//     color: "#000000",
//   },
});

