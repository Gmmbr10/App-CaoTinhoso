import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../Header";
import style from "../../styles/home";

export default function Home() {
    
    const {navigate} = useNavigation();
    
    return (
        <View style={style.container}>

            <Header title="Nós matamos o cão Tinhoso" />

            <View style={style.btns}>

                <TouchableOpacity style={style.btn} onPress={()=> navigate("Sinopse")}>
                    <Text style={style.txtBtn}>Sinópse</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.btn} onPress={()=> navigate("Autor")} >
                    <Text style={style.txtBtn}>Sobre o autor</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.btn} onPress={()=> navigate("Livro")}>
                    <Text style={style.txtBtn}>Sobre o livro</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}