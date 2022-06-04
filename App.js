import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Start from './components/Start'
import Zadanie from './components/Zadanie'
import Historia from './components/Historia'
import Szyfry from './components/Szyfry'
import Terenoznastwo from './components/Terenoznastwo'

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>

      <View style={{ display: 'flex', alignItems: 'center', padding: 50, }}>
        <Image
          style={{ width: 150, height: 180 }}
          source={require('./assets/malkowski.png')}
        />
        <Text style={{ fontSize: 30 }}>Dzień Myśli Braterskiej</Text>

      </View>

      <DrawerItem
        label="Zadanie 1"
        icon={() => <Text>⚜️</Text>}
        onPress={() => props.navigation.navigate("Zadanie 1", { message: "Drahonowska", letter: "E", photo: require('./assets/zad01.png') })}
      />
      <DrawerItem
        label="Zadanie 2"
        icon={() => <Text>⚜️</Text>}
        onPress={() => props.navigation.navigate("Zadanie 2", { message: "Obserwacja", letter: "T", photo: require('./assets/zad02.jpg') })}
      />
      <DrawerItem
        label="Zadanie 3"
        icon={() => <Text>⚜️</Text>}
        onPress={() => props.navigation.navigate("Zadanie 3", { message: "Druzyna", letter: "B", photo: require('./assets/zad03.jpg') })}
      />
      <DrawerItem
        label="Zadanie 4"
        icon={() => <Text>⚜️</Text>}
        onPress={() => props.navigation.navigate("Zadanie 4", { message: "Braterstwo", letter: "R", photo: require('./assets/zad04.jpg') })}
      />
      <DrawerItem
        label="Zadanie 5"
        icon={() => <Text>⚜️</Text>}
        onPress={() => props.navigation.navigate("Zadanie 5", { message: "Apteczka", letter: "H", photo: require('./assets/zad05.jpg') })}
      />
      <DrawerItem
        label="Zadanie 6"
        icon={() => <Text>⚜️</Text>}
        onPress={() => props.navigation.navigate("Zadanie 6", { message: "Krasicki", letter: "O", photo: require('./assets/zad06.jpg') })}
      />
      <DrawerItem
        label="Zadanie 7"
        icon={() => <Text>⚜️</Text>}
        onPress={() => props.navigation.navigate("Zadanie 7", { message: "Cheese", letter: "R", photo: require('./assets/zad07.jpg') })}
      />

      {/* <DrawerItemList {...props} /> */}

      <View style={{ display: 'flex', alignItems: 'center', padding: 50, }}>
        <Text style={{ fontSize: 30 }}>ABC</Text>
      </View>

      <DrawerItem
        label="Początki"
        icon={() => <Text>⏳</Text>}
        onPress={() => props.navigation.navigate("Historia")}
      />
      <DrawerItem
        label="Szyfry"
        icon={() => <Text>🔒</Text>}
        onPress={() => props.navigation.navigate("Szyfry")}
      />
      <DrawerItem
        label="Terenoznastwo"
        icon={() => <Text>🌲</Text>}
        onPress={() => props.navigation.navigate("Terenoznastwo")}
      />
      <DrawerItem
        label="DMB"
        icon={() => <Text>🤝</Text>}
        onPress={() => alert("Dzień Myśli Braterskiej to święto przyjaźni obchodzone w dniu 22 lutego każdego roku przez harcerzy i skautów na całym świecie.\n\n22 lutego to dzień urodzin założyciela skautingu, sir Roberta Baden-Powella (1857) i jego żony Olave Baden-Powell (1889).")}
      />
      <Text>{'\n'}</Text>
      <DrawerItem
        label="Info"
        icon={() => <Text>ℹ️</Text>}
        onPress={() => alert("Aplikacja stworzona na potrzeby zbiórki harcerskiej 3 próbnej Podgórskiej Drużyny Harcerzy 'Tarcza'. \n\n\n Miłosz Rzyczniak © 2022")}
      />

    </DrawerContentScrollView>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Strona Startowa"
          component={Start} />
        <Drawer.Screen
          options={{
            drawerIcon: () => <Text>⚜️</Text>
          }}
          name="Zadanie 1"
          component={Zadanie} />
        <Drawer.Screen
          options={{
            drawerIcon: () => <Text>⚜️</Text>
          }}
          name="Zadanie 2"
          component={Zadanie} />
        <Drawer.Screen
          options={{
            drawerIcon: () => <Text>⚜️</Text>
          }}
          name="Zadanie 3"
          component={Zadanie} />
        <Drawer.Screen
          options={{
            drawerIcon: () => <Text>⚜️</Text>
          }}
          name="Zadanie 4"
          component={Zadanie} />
        <Drawer.Screen
          options={{
            drawerIcon: () => <Text>⚜️</Text>
          }}
          name="Zadanie 5"
          component={Zadanie} />
        <Drawer.Screen
          options={{
            drawerIcon: () => <Text>⚜️</Text>
          }}
          name="Zadanie 6"
          component={Zadanie} />
        <Drawer.Screen
          options={{
            drawerIcon: () => <Text>⚜️</Text>
          }}
          name="Zadanie 7"
          component={Zadanie} />
        <Drawer.Screen
          name="Historia"
          component={Historia} />
        <Drawer.Screen
          name="Szyfry"
          component={Szyfry} />
        <Drawer.Screen
          name="Terenoznastwo"
          component={Terenoznastwo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}