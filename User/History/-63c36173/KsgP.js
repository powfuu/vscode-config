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
    const [boxHeight, setBoxHeight] = useState(0)
    const shuffleArray = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
    }
    useEffect(()=>{
        shuffleArray(result)
        result[0].length >= 32 ? setBoxHeight(137) : result[0].length <= 31 ?
        result[0].length >= 21 ? setBoxHeight(88) : result[0].length <= 20 ? setBoxHeight(59) : null
        : null
    },[])
    return(
        <e.MainView>
            <e.ResultView>
            <e.Crown name="shield-crown" size={60} color="gold" />
            <LinearGradient
            colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            style={{ height: boxHeight, width: 200, alignItems: 'center', justifyContent: 'center', width: 200, borderRadius: 8}}>
             <e.ResultMainView>
              <e.ResultText>
                  {result[0]}
              </e.ResultText>
          </e.ResultMainView>
          </LinearGradient>
          </e.ResultView>
          <e.ResultViewMain>
<e.ResultListView overScrollMode={'never'}>
              {result.map((res,KEY)=>{
                  return(
                      <e.ResultListMapView key={KEY}>
                    <e.ResultDecision style={{color:'gold'}}>{KEY+1}</e.ResultDecision>
                    <e.ResultIndicator name="clear-all" color={'#fff'} size={24}/>
                    <e.ResultDecision>{res}</e.ResultDecision>
                      </e.ResultListMapView>
                  )
              })}
          </e.ResultListView>
</e.ResultViewMain>
            
        </e.MainView>
    )
}
export default Decision;