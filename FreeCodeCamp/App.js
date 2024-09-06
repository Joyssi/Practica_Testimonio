import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Testimonio from './Componentes/Testimonio';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('./Imagenes/logo.png')} />

      <ScrollView style={styles.scroll}>
      <Text style={styles.text1}>Esto es lo que nuestros alumnos sobre FreeCodeCamp:</Text>
        <Testimonio 
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          foto={require('./Imagenes/img1.png')}
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar 
          trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. 
          Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp 
          cambió mi vida."
        />
        <Testimonio 
          nombre="Sarah Chima "
          pais="Nigeria"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          foto={require('./Imagenes/img2.png')}
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. 
          El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de 
          principiante total a un nivel muy seguro."
        />
        <Testimonio 
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          foto={require('./Imagenes/img3.png')}
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero 
          el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y 
          algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el 
          trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 80,
    width: '100%',
    marginTop:30,
  },
  scroll: {
    width: '100%',
  },
  text1:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:10,
  },
});
