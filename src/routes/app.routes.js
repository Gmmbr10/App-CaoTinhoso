import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../components/Splash";
import Home from "../components/Home";
import Author from "../components/subpages/SobreAutor";
import Book from "../components/subpages/SobreLivro";
import Sinopse from "../components/subpages/Sinopse";
const { Navigator , Screen } = createStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>

            <Screen
                name="Splash"
                component={Splash}
            />

            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="Autor"
                component={Author}
            />

            <Screen
                name="Livro"
                component={Book}
            />

            <Screen
                name="Sinopse"
                component={Sinopse}
            />
            
        </Navigator>
    )
}