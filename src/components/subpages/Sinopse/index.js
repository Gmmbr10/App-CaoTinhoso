import { View, Text, Image, ScrollView } from "react-native";
import Headerback from "../Headerback";
import style from "../../../styles/subpages";

export default function Sinopse() {
    return (
        <View>

            <Headerback />

            <View style={style.main}>

                <Image source={require("../../../images/capaLivro.jpg")} style={style.image} />

                <ScrollView>
                    <Text style={style.txt} >
                        <Text style={style.subTitle}>"Nós Matamos o Cão-Tinhoso" </Text>
                        é um romance de Luís Bernardo Honwana que se passa em Moçambique
                        durante o período colonial. O livro retrata a luta de um grupo de
                        moradores contra a opressão dos colonizadores portugueses, simbolizada pela
                        eliminação de um cachorro problemático.
                        {"\n\n"}
                        Abordando questões sociais, raciais e políticas, a história reflete sobre
                        identidade, desigualdade e resistência na sociedade moçambicana.
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
}