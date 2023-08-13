import { View, Text, Image, ScrollView } from "react-native";
import Headerback from "../Headerback";
import style from "../../../styles/subpages";

export default function Book() {
    return (
        <View style={style.container} >

            <Headerback />

            <View style={style.main}>

                <Image source={require("../../../images/capaLivro.jpg")} style={style.image} />

                <ScrollView>
                    <Text style={style.txt} >

                        <Text style={style.subTitle}>Título</Text>: Nós Matamos o Cão-Tinhoso
                        {"\n\n"}
                        <Text style={style.subTitle}>Autor</Text>: Luís Bernardo Honwana
                        {"\n\n"}
                        <Text style={style.subTitle}>Ano de publicação</Text>: 1964
                        {"\n\n"}
                        <Text style={style.subTitle}>Gênero</Text>: Romance
                        {"\n\n"}
                        <Text style={style.subTitle}>Localização</Text>: Moçambique (período colonial)
                        {"\n\n"}
                        <Text style={style.subTitle}>Temas abordados</Text>: Sociais, raciais, políticos, colonialismo, opressão, resistência
                        {"\n\n"}
                        <Text style={style.subTitle}>Contexto histórico</Text>: Período colonial em Moçambique, então colônia portuguesa
                        {"\n\n"}
                        <Text style={style.subTitle}>Relevância</Text>: Considerado um clássico da literatura africana e amplamente estudado e discutido
                        {"\n\n"}
                        <Text style={style.subTitle}>Mensagem</Text>: Reflete sobre identidade, desigualdade e resistência na sociedade moçambicana
                        {"\n\n"}
                        <Text style={style.subTitle}>Impacto</Text>: Reconhecido por sua mensagem política e socialmente engajada

                    </Text>
                </ScrollView>
            </View>

        </View>
    )
}