import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CardPassagem({dados}){

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

    return(
        <View style={styles.container}>
            <View style={styles.cardLateral}>
                <FontAwesome name="plane" size={20} color="white" style={{ transform: [{ rotate: "-270deg" }] }} />
                <Text style={styles.titulo}>{ciaAerea}</Text>
            </View>
             <View style={styles.divInfo}>
                {/* Ida */}
                <View style={styles.infoIda}>

                </View>
                {/* Volta */}
                <View style={styles.infoVolta}>

                </View>
                {/* Detalhes */}
                <View style={styles.divDetalhes}>

                </View>

             </View>


        </View>
    );
}