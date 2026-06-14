import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CardPassagem({ dados }) {
  const {
    ciaAerea,
    horaPartidaIda,
    aeroPartidaIda,
    dataPartidaIda,
    horaChegadaIda,
    aeroChegadaIda,
    dataChegadaIda,
    horaPartidaVolta,
    aeroPartidaVolta,
    dataPartidaVolta,
    horaChegadaVolta,
    aeroChegadaVolta,
    dataChegadaVolta,
    paradas,
    valor,
  } = dados;

  return (
    <View style={styles.container}>
      <View style={styles.cardLateral}>
        <FontAwesome
          name="plane"
          size={20}
          color="white"
          style={{ transform: [{ rotate: "-270deg" }] }}
        />
        <Text style={styles.titulo}>{ciaAerea}</Text>
      </View>
      <View style={styles.divInfo}>
        {/* Ida */}
        <View style={styles.infoIda}>
          <View style={styles.partidaIda}>
            <Text style={styles.horario}>{horaPartidaIda}</Text>
            <Text style={styles.data}>
              {aeroPartidaIda} · {dataPartidaIda}
            </Text>
          </View>
          <FontAwesome
            name="plane"
            size={16}
            color="black"
            style={{ transform: [{ rotate: "-270deg" }] }}
          />
          <View style={styles.chegadaIda}>
            <Text style={styles.horario}>{horaChegadaIda}</Text>
            <Text style={styles.data}>
              {aeroChegadaIda} · {dataChegadaIda}
            </Text>
          </View>
        </View>

        {/* Volta */}
        <View style={styles.infoVolta}>
          <View style={styles.partidaVolta}>
            <Text style={styles.horario}>{horaPartidaVolta}</Text>
            <Text style={styles.data}>
              {aeroPartidaVolta} · {dataPartidaVolta}
            </Text>
          </View>
          <FontAwesome
            name="plane"
            size={16}
            color="black"
            style={{ transform: [{ rotate: "270deg" }] }}
          />
          <View style={styles.chegadaVolta}>
            <Text style={styles.horario}>{horaChegadaVolta}</Text>
            <Text style={styles.data}>
              {aeroChegadaVolta} · {dataChegadaVolta}
            </Text>
          </View>
        </View>

        {/* Detalhes */}
        <View style={styles.divDetalhes}>
          <View style={styles.divBagagens}>
            <Image
              source={require("../assets/malas.png")}
              style={styles.iconBagagem}
            />
            <Image
              source={require("../assets/malas_mao.png")}
              style={styles.iconBagagem}
            />
          </View>
          <Text>{paradas} Parada</Text>
          <Text style={styles.valor}>R${valor}</Text>
        </View>
      </View>
    </View>
  );
}

