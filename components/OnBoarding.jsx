import React,{useState} from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Car from '../assets/parkit_car.png'

const OnBoarding = () => {

    const welcome_stack = [
    {
      id:1,
      heading:"Find multiple slots",
      description:"Selct the day, book your slot. We give you the best price"
    },
    {
      id:2,
      heading:"Book your parking lot",
      description:"Found a parking slot matches your schedule"
    },
    {
      id:3,
      heading:"Enjoy your parking",
      description:"Easy discovery of new places to park your vechiles"
    }
  ]
  const [currentIndex,setCurrentIndex] = useState(0)
  
  const continueToApp = async () => {
    if (currentIndex<welcome_stack.length -1){
      setCurrentIndex(currentIndex+1)
    }else{
      router.replace('/home')
    }
  };
  const buttonTitle = currentIndex ===welcome_stack.length-1? "Continue":"Next"

  return (
    <>
        <View style={styles.container}>    
            <Image source={Car} style={styles.car} />
            <Text style={styles.header}>{welcome_stack[currentIndex].heading}</Text>
            <Text style={styles.text}>{welcome_stack[currentIndex].description}</Text>
            <View style={styles.bottomContainer} >
            <View style={styles.indicatorContainer} >
                {welcome_stack.map((e,i)=>(
                <Text key={i} style={currentIndex===i?styles.indicatorActive:styles.indicator} ></Text>
                ))}
            </View>
            <TouchableOpacity style={styles.btn}  onPress={continueToApp}>
                <Text style={styles.btntext} >{buttonTitle}</Text>
            </TouchableOpacity>
            </View>
        </View>
    </>
  )
}


const styles = StyleSheet.create({
  wlImg:{position:'absolute',zIndex:99},
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 20 ,height:60},
  indicator:{
    backgroundColor:"#cccccc",
    marginHorizontal:5,
    paddingHorizontal:3,
    borderRadius:5
  },
  indicatorActive:{
    backgroundColor:"#fa681a",
    marginHorizontal:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  indicatorContainer:{
     width:100,
     height:1,
     flexWrap:'wrap',
     marginTop:5
  },
  car:{
    width:150,
    height:150,
    alignSelf:'center',
    margin:30
  },
  bottomContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline'
  }, 
  btn:{
    backgroundColor:"#fa681a",
    padding:5,
    borderRadius:50,
  },
  btntext:{
    color:'#ffffff',
    paddingHorizontal:15,
    paddingVertical:5,
    fontSize:18
  }
});


export default OnBoarding