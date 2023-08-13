import { TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

export default function Headerback() {

    const { navigate } = useNavigation();

    return (
        <TouchableOpacity style={style.container} onPress={()=>navigate("Home")} >
            <SafeAreaView style={style.container}>
                <Text style={style.txt} >Ir para a página inicial</Text>
            </SafeAreaView>
        </TouchableOpacity>
    )
}