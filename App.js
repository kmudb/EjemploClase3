import React, { Component } from 'react'; 
import { AppRegistry, StyleSheet, Text, View , Image} from 'react-native'; 
 
const estilos = StyleSheet.create({ 
  grandeAzul: { 
    color: 'blue', 
    fontWeight: 'bold', 
    fontSize: 30, 
}, 
rojo: { 
  color: 'red', 
}, 
}); 

export default class MuchosEstilos extends Component { 
render() { 
  return ( 
    <View> 
      <Image source={require('../clase3eje1/assets/icon.png')} />
      <Text style={estilos.rojo}>solo rojo</Text> 
      <Text style={estilos.grandeAzul}>solo grandeAzul</Text> 
      <Text style={[estilos.grandeAzul, estilos.rojo]}>grandeAzul, entonces rojo</Text> 
      <Text style={[estilos.rojo, estilos.grandeAzul]}>rojo, entonces azulGrande</Text> 
    </View> 
  ); 
} 
} 

// skip this line if using Create React Native App 
AppRegistry.registerComponent('ProjectoEstilos', () => MuchosEstilos); 
