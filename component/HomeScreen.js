import * as React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import Swiper from 'react-native-swiper';


const height = Dimensions.get('window').height;



export default function HomeScreen({ navigation}){
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Swiper style={styles.wrapper} showsButtons loop={true}>
          <View style={styles.Items}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.thelivingos.com/')}>
              <Image
                source={require('../img/SweetTooth.jpg')}
                style={styles.ImgSize}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.Items}>
            <TouchableOpacity onPress={() => navigation.navigate('map')}>
              <Image
                source={require('../img/SweetTooth.jpg')}
                style={styles.ImgSize}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.Items}>
            <Image
              source={require('../img/SweetTooth.jpg')}
              style={styles.ImgSize}
            />
            
          </View>
        </Swiper>
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    height: height,
  },
  contents: {
    height: '92%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ImgSize: {
    height: '100%',
    width: '100%',
  },

  fontItems: {
    fontSize: 18,
    marginLeft: 15,
  },
});
