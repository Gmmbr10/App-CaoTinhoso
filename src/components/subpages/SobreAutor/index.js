import { View, Text, Image, ScrollView } from "react-native";
import Headerback from "../Headerback";
import style from "../../../styles/subpages";

export default function Author() {
    return (
        <View style={style.container}>

            <Headerback />

            <View style={style.main}>

                <Image source={require("../../../images/autor.jpg")} style={style.image} />

                <ScrollView>
                    <Text style={style.txt}>
                        Luís Bernardo Honwana é um renomado escritor moçambicano conhecido por seu
                        engajamento político e sua escrita que aborda questões sociais e raciais.
                        Ele nasceu em 1942 em Lourenço Marques (atual Maputo) e cresceu em Moçambique
                        durante o período colonial português. Honwana é considerado um dos pioneiros da
                        literatura africana de expressão portuguesa.

                        {"\n\n"}

                        Sua obra mais famosa é o livro "Nós Matamos o Cão-Tinhoso", publicado em 1964,
                        que se tornou um marco na literatura africana. Ele escreveu principalmente contos,
                        explorando temas como identidade, opressão colonial, desigualdade e resistência.
                        Sua escrita é caracterizada por uma abordagem realista e uma sensibilidade aguçada
                        para as questões sociais e políticas de seu tempo.

                        {"\n\n"}

                        Além de sua carreira como escritor, Honwana também teve envolvimento político ativo
                        e trabalhou para o governo moçambicano após a independência do país em 1975. Sua
                        contribuição literária e seu compromisso com a luta pela liberdade e justiça
                        renderam-lhe reconhecimento e respeito tanto em Moçambique quanto
                        internacionalmente.
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
}