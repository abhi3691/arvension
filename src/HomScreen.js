import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
export default function HomScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{height: 50}}></View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <View style={styles.circle}>
              <Text style={styles.plusText}>+</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.topPart}>
        <View>
          <Text style={styles.degree}>°C</Text>
          <Text style={styles.Celsius}>25</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.nameText}>Daniela!</Text>
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome to your smart home</Text>
        </View>
      </View>
      <View style={styles.bottomPart}>
        <View>
          <Text style={styles.roomText}>Rooms</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-design-ideas-hbx050121rayattanasio-008-1623358251.jpg?crop=0.818xw:1.00xh;0.0255xw,0&resize=480:*',
              }}
              style={styles.card}></Image>
            <View style={styles.roomContainer}>
              <Text style={styles.RoomName}>Bedroom</Text>
              <Text style={styles.RoomNumber}>310</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://www.thespruce.com/thmb/Tb_sMZeLJudhsb7MIN6IYh0iRSQ=/2048x1367/filters:fill(auto,1)/lavender2-dd461d67ee8240d5bbca3e0b09e9c41c.png',
              }}
              style={styles.card}></Image>
            <View style={styles.roomContainer}>
              <Text style={styles.RoomName}>Leving Room</Text>
              <Text style={styles.RoomNumber}>510</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvY1y4r9WomM2S141KSI74Iplw0x1e2LLuPpHPP5GcKKlhLN6kUKxZI4IdWqEtud4wDZg&usqp=CAU',
              }}
              style={styles.card}></Image>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-design-ideas-hbx050121rayattanasio-008-1623358251.jpg?crop=0.818xw:1.00xh;0.0255xw,0&resize=480:*',
              }}
              style={styles.card}></Image>
          </View>
        </ScrollView>
        <View style={styles.scrollIndContainer}>
          <View style={styles.scrollInd}>
            <View style={styles.scroll}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#EAE9E7',
  },
  header: {
    flex: 0.25,
  },
  buttonContainer: {
    height: 10,
    width: '100%',
  },

  buttonBox: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#F6F6F4',
    elevation: 10,
    height: 60,
    width: 80,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  circle: {
    height: 45,
    width: 45,
    borderRadius: 45,
    elevation: 4,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  plusText: {
    fontSize: 30,
    color: '#9EA586',
  },
  topPart: {
    flex: 0.75,
    marginHorizontal: 20,
  },
  Celsius: {
    fontSize: 50,
    color: '#73736F',
  },
  degree: {
    left: 60,
    top: 25,
    fontSize: 18,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },
  greeting: {
    fontSize: 30,
    color: '#6B6A68',
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 10,
  },
  bottomPart: {
    flex: 1.5,
    marginHorizontal: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: '#B9B8B6',
  },
  roomText: {
    fontSize: 18,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 150,
    elevation: 4,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  scrollIndContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollInd: {
    borderRadius: 30,

    height: 8,
    width: 135,
    backgroundColor: '#fff',
    elevation: 4,
  },
  scroll: {
    backgroundColor: '#DAAE7F',
    width: 50,
    height: 8,
  },
  roomContainer: {
    position: 'absolute',
  },
  RoomName: {
    color: '#fff',
    elevation: 4,
    fontSize: 20,
    alignSelf: 'center',
  },
  RoomNumber: {
    color: '#fff',
    elevation: 4,
    alignSelf: 'center',
  },
});
