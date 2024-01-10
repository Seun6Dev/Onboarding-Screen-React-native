import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import {useFonts} from 'expo-font';
import colors from "./assets/colors/colors"


const onBoard1 = require ('../assets/images/onBoard1.jpg')
const onBoard2 = require ('../assets/images/onBoard2.jpg')
const onBoard3 = require ('../assets/images/onBoard3.jpg')


const data = [
  {
    title: 'Hold on to your Wallet',
    text: 'That way it doesnt get stolen or borrowed by an helpful unknown fellow',
    image: require('../assets/images/onBoard1.jpg'),
   
  },
  {
    title: 'That money no dey go heaven',
    text: 'Try enjoy sometimes nobody dey tell person this days hmm good luck',
    image: require('../assets/images/onBoard2.jpg'),
    
  },
  {
    title: 'Sometimes sha spend wisely',
    text: "This one dem dey tell person but if you fit no hear clearly at first so i dey tell you now",
    image: require('../assets/images/onBoard3.jpg'),
    
  },
];

export default function OnBoard(props) {

  const [fontsLoaded] = useFonts({
    "champB": require("../assets/fonts/Roboto-Bold.ttf"),
    "champ": require("../assets/fonts/Roboto-Medium.ttf"),
    //"champS": require('./assets/fonts/Quickand_Book.otf')
  })

  if (!fontsLoaded){
    return null
  }

  const renderItem = ({item})=>{
    return(
      <View style={styles.slide}>
        
          <Image source={item.image} style={styles.img}/>
        
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View> 
    )
  }

  const keyExtractor = (item)=> item.title

  const renderDoneButton = ()=>{
    return(
      <View style = {styles.rightTextWrapper}>
        <Text style={styles.rightText}>Done</Text>
      </View>
    )
  }
  const renderNextButton = ()=>{
    return(
      <View style = {styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    )
  }
  const renderPrevButton = ()=>{
    return(
      <View style = {styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    )
  }

  const boardingDone = ()=>{
    props.boardingDone
  }

  return (

       <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={data}
            renderDoneButton={renderDoneButton}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            showPrevButton
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.aDotStyle}
            onDone={boardingDone}
          />
      </View>
 
  );
}

const styles = StyleSheet.create({
  slide:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:colors.white
  },
  img:{
    width:350,
    height:350,
    marginVertical:20,
    resizeMode:'contain'
  },
  title:{
    fontFamily:'champB',
    fontSize:24,
    marginHorizontal:55,
    textAlign:'center',
    color: colors.blue
  },
  text:{
    fontFamily:'champ',
    fontSize:14,
    marginHorizontal:40,
    textAlign:'center',
    marginVertical:20,
    color: colors.darkGray
  }, 
  rightTextWrapper:{
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginRight:20
  },  
  rightText:{
    fontFamily:"champB",
    fontSize:14,
    color: colors.blue
  }, 
  leftTextWrapper:{
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20
  }, 
  leftText:{
    fontFamily:"champB",
    fontSize:14,
    color: colors.blue
  },  
  dotStyle:{
    backgroundColor:colors.gray
  },
  aDotStyle:{
    backgroundColor:colors.blue
},
});
