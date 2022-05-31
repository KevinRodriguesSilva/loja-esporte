
import { StyleSheet, Text, View, FlatList,} from "react-native";
import Dados from "./dados/jogos.js";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Jogos from "./src/components/jogos";
import Banner from "./src/components/banner/index.js";



export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <View> 
      </View>
      <View>
      <Banner>
      </Banner>
      </View> 
      <View>
        <FlatList
          horizontal={true}
          data={Dados}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

            <Jogos
              titulo = {item.nome}
              imagem = {item.imagem}
              valor = {item.valor}
            />
          )}
        />
      </View>
      <View>
      <FlatList
          horizontal={true}
          data={Dados}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

            <Jogos
              titulo = {item.nome}
              imagem = {item.imagem}
              valor = {item.valor}
            />
          )}
        />
      </View>
    </View>
  );    
}
