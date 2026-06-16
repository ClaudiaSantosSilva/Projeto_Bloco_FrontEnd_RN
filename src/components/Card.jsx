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
        <Image
          source={{ uri: imgemSrc }}
          alt={titulo}
          style={styles.image}
        />
    </View>
    <View>
        
    </View>
  </View>
  );
}
