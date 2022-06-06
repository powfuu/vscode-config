import { useEffect, useState } from 'react'
import * as e from '../../AppComponents'
import { LinearGradient } from 'expo-linear-gradient';
import { Animated,Alert, Keyboard, Dimensions } from 'react-native'
import { WaveIndicator } from 'react-native-indicators'
import * as Animatable from 'react-native-animatable'
import { useRoute } from '@react-navigation/native'

const Decision = ({navigation}) =>{
    const props = useRoute().params;
    const [result,setResult]=useState(props.decisions)
    const shuffleArray = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
    }
    useEffect(()=>{
        shuffleArray(result);
    },[])
    return(
        <e.MainView>
            <e.ResultView>
            <LinearGradient
            colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            style={{ height: 60, width: 200, alignItems: 'center', justifyContent: 'center', width: 200, borderRadius: 8}}>
             <e.ResultMainView onPress={()=>{

             }}>
              <e.ResultText>
                  {result[0]}
              </e.ResultText>
          </e.ResultMainView>
          </LinearGradient>
            </e.ResultView>
        </e.MainView>
    )
}
export default Decision;