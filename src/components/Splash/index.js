import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import style from "../../styles/splash";

export default function Splash() {

    const { navigate } = useNavigation();

    return (
        <ImageBackground style={style.container} source={require("../../images/capaLivro.jpg")}>
            <TouchableOpacity  style={style.container} onPress={() => navigate("Home")}>
                <SafeAreaView style={style.center}>


                    <Text style={style.txt}>Clique para continuar</Text>


                </SafeAreaView>
            </TouchableOpacity>
        </ImageBackground>
    )

}