import { View, Text, Image } from "react-native";

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
          <View style={styles.card_icone}>
            <Image
              source={{ uri: iconeAdicionar }}
              style={{ width: 24, height: 24 }}
            />
          </View>
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
