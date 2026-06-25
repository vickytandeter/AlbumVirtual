import{ View, Text } from 'react-native';
// import HeaderVacío from '../HeaderVacío';
// import Footer from '../Footer';
import FormLogIn from './FormLogIn';

function LogIn() {

    return(

        <View>
{/*             
            <HeaderVacío/> */}
            
            <View>
                <Text>Inicio de Sesión</Text>
                <FormLogIn/>
            </View>
{/* 
            <Footer/> */}
        
        </View>

    );
}

export default LogIn;