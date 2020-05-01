import React, { useState, useRef } from 'react';
import { View, Image, ImageBackground, Text, TextInput, ScrollView, StatusBar, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import Carousel from 'react-native-anchor-carousel'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles.js'

export default function App() {

  const width = Dimensions.get('window').width
  
  const [background, setBackground] = useState({
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwtU95JygcmCq4e3XPpL9W0ATjGFoQCQm16dbpIp7BM36B7lH',
    title: 'Vingadores: Ultimato',
    released: '2019 ‧ Ação/Ficção científica ‧ 3h 2m',
    desc: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.',
  })
    
  const [gallery, setgallery] = useState([
    { 
       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwtU95JygcmCq4e3XPpL9W0ATjGFoQCQm16dbpIp7BM36B7lH',
       title: 'Vingadores: Ultimato',
       released: '2019 ‧ Ação/Ficção científica ‧ 3h 2m',
       desc: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.',
    },
    { 
      image: 'https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg',
      title: 'O Rei Leão',
      released: '2019 ‧ Animação/Família ‧ 1h 58m',
      desc: 'Traído e exilado de seu reino, o leãozinho Simba precisa descobrir como crescer e retomar seu destino como herdeiro real nas planícies da savana africana.',
    },
    { 
      image: 'https://imagens.canaltech.com.br/270983.516355-Frozen-2.jpg',
      title: 'Frozen 2',
      released: '2019 ‧ Animação/Família ‧ 1h 43m',
      desc: 'De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajuda Elsa a compreender a origem de seus poderes.',
    },
    { 
      image: 'https://www.gstatic.com/tv/thumb/v22vodart/86158/p86158_v_v8_aa.jpg',
      title: 'Pokémon: Alma Gêmea',
      released: '2004 ‧ Animação/Fantasia ‧ 1h 50m',
      desc: 'Pokémon 7: Alma Gêmea, lançado originalmente no Japão como Pocket Monsters Advanced Generation the Movie: Deoxys the Visitor é o sétimo filme da série de desenho animado Pokémon e o segundo de Pocket Monsters Advanced Generation. A versão japonesa original foi lançado nos cinemas em 17 de julho de 2004.',
    },
  ]);
  
  const [list, setList] = useState([
    {
      image: 'https://img.elo7.com.br/product/zoom/2A1A4B7/big-poster-filme-joker-coringa-joaquin-phoenix-tam-90x60-cm-nerd.jpg',
      key: '1'
    },
    {
      image: 'https://lh3.googleusercontent.com/proxy/AF8fUlPAcgVJsx6tfivwpjs9OUrxvrnfqeuaP_MKJCequfESfhGY-jACslfUG0thqLGHU3wRfQ4x3PdC-xBtM_rtx7DJTVBhaSnOlkayqt0TRcX2xsIVPxNicTaPC1jRU1sqL9OuSQ',
      key: '2'
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ__gbILnE3jJ4cC5-5MYRg1yJpKINKnb4mlkElPRgei9fynPah',
      key: '3'
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFEXK7nOeOlpnsn9IxrdUc1Z53qnHLkE7kPAkhyCTf0mwJ8beF',
      key: '4'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeIwg90s6NzMa0ZZmU5rXRX2Qhtn1C6b6LQK14LZSmrNNFNQs',
      key: '5'
    },
  ])

  const carouselRef = useRef(null)

  const renderItem = ({item, index}) => {
    return(
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index)
            setBackground({
              image: item.image,
              title: item.title,
              released: item.released,
              desc: item.desc
            })
          }}
        >
          <Image source={{uri: item.image}} style={styles.carouselImage}/>
          <MaterialIcons name="library-add" size={30} color="#fff" style={styles.carouselIcon}/>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
    <StatusBar barStyle="light-content" hidden={true}/>
    <ScrollView style={styles.container}>
      <ImageBackground source={{uri: background.image}} style={styles.imageBg} blurRadius={10}>
        <View style={{paddingHorizontal: 10}}>
          <View style={styles.searchContent}>
            <TextInput placeholder='Procure por um filme ou série' style={{ fontSize: 20 }} />
            <MaterialIcons name="search" color="#4287f5" size={28}/>
          </View>

          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20, paddingTop: 20}}>Em alta essa semana</Text>
          
          <View style={styles.carouselContainer}>
            <Carousel style={styles.carousel}
              data={gallery}
              renderItem={renderItem}
              itemWidth={200}
              containerWidth={width - 50}
              separatorWidth={0}
              inActiveOpacity={0.4}
              ref={carouselRef}
            /> 
          </View>

          <View style={styles.movieInfoContainer}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.movieTitle}>{background.title}</Text>
              <Text style={styles.movieReleased}>{background.released}</Text>
            </View>
            <TouchableOpacity style={styles.playIcon}>
              <MaterialIcons name="play-arrow" size={50} color='#4287f5'/>
            </TouchableOpacity>
          </View>

          <View style={{paddingHorizontal: 10, marginTop: 14}}>
            <Text style={{color: '#fff', opacity: 0.8, lineHeight: 20}}>{background.desc}</Text>
          </View>

          

        </View>
        <View style={{marginHorizontal: 10}}>
            <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginTop: 24}}>Continue de onde parou</Text>
            <ImageBackground 
              source={{uri: 'https://spinoff.com.br/wp-content/uploads/Como-Treinar-o-Seu-Dragão.jpeg'}}
              style={{height: 200, width: '100%', backgroundColor: '#000'}}
              resizeMode='cover'
            >
              <Text style={{color: '#fff', paddingTop: 5, paddingLeft: 10 }}>Como Treinar o Seu Dragão 3</Text>
              <TouchableOpacity style={{top: '33%', left: '37%', backgroundColor: '#000', position: 'absolute', borderRadius: 50}}>
                <MaterialIcons name="play-arrow" size={80} color='#4287f5'/>
              </TouchableOpacity>
            </ImageBackground>
            
            <View style={{flexDirection:"row", height: 100, marginTop: 24, justifyContent: 'space-between'}}>
              <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Minha Lista</Text>
            </View>

          </View>
          <FlatList 
              style={{bottom: 40, marginLeft: 10}}
              data={list}
              horizontal={true}
              renderItem={ ({ item }) => {
                return (
                  <TouchableOpacity style={{marginRight: 10}}>
                    <Image source={{uri: item.image}} style={{height: 300, width: 200}} />
                  </TouchableOpacity>
                )
              }}
            />
      </ImageBackground>
    </ScrollView>
    </>
  );
}
