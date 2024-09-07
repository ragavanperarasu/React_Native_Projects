import { Text, View, Button, TextInput, SafeAreaView, Alert,StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";


export default function Index() {
  const [iText, setItext] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [delGoal, setDelGoal] = useState([]);
  function inputText(e: any){
    setItext(e);
  }
  function buttonClick(){  
    setTodoList([iText, ...todoList]);
    setItext("");
  }
  function goalDelete(g){
    const t = todoList;
    const v = t.splice(g,1);
    setTodoList(t);
    Alert.alert("Information", (g+1).toString()+" is Deleted Successfully",[
      {
        text:"Okay"
      }
    ])
    setDelGoal(v);
    
  }

  return (
    <>
   <StatusBar style="black"/>
    <View style={s.outerContainer}>
      <View style={s.topTitle}>
        <Text style={s.tileText}>Todo List</Text>
      </View>
      <View style={s.topInput}>
        <View  style={s.topInputBox}>
          <TextInput placeholder="Add Your List ..." 
          style={{fontSize:18, padding:5, backgroundColor:"white"}} onChangeText={inputText} value={iText}/>
        </View>
        <View style={s.topInputButton}>
          <Button title="Add" onPress={buttonClick} />
        </View>     
      </View>


      <View style={s.bottomList}>
        <ScrollView>
          {todoList.map((goal, i) => 
            <View key={i} style={s.goalShowView}>
              <Text style={{borderTopLeftRadius:5, borderBottomLeftRadius:5,color:"white",backgroundColor:"#003262", fontSize:20, padding:8,flex:2}}>{i+1}</Text>
              <Text style={s.goalShowText}>{goal}</Text>
              <Text 
              style={{borderTopRightRadius:5, borderBottomRightRadius:5,color:"white",backgroundColor:"#003262", fontSize:20, padding:8,flex:2}}
              onPress={()=>goalDelete(i)}>Del</Text>
            </View>
          )}
        </ScrollView>
      </View>
        
      
    
      
    </View></>

  );


}

const s = StyleSheet.create({
  outerContainer:{
    
    padding:20,
    backgroundColor:"#4B0082",
  
   
  },
  topTitle:{
/*     borderWidth:2,
    borderColor:"black", */
    borderRadius:5,
    backgroundColor:"#8A2BE2"

  },
  tileText:{
    fontSize:25,
    textAlign:"center",
    color:"white",
    padding:10,
      fontWeight:"500",
      fontFamily:""
  },
  topInput:{
    marginTop:20,
    
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    height:40,

  
/*     borderWidth:2,
    borderColor:"black" */

    
    
  },
  topInputBox:{
    flex:2,
    borderWidth:2,
    borderColor:"#DBD7D2",
    marginRight:10,
    borderRadius:5,

  },
  topInputButton:{
    flex:1,
  },
  bottomList:{
    borderTopWidth:5,
    borderRadius:2,
    borderTopColor:"#8B004B",
    marginTop:20,
    height:"100%"
  },
  goalShowView:{
/*     borderWidth:2,
    borderColor:"black",  */
    borderRadius:5, 
    marginTop:10,
    backgroundColor:"#880085",
    display:"flex",
    flexDirection:"row",
    
  },
  goalShowText:{
    fontSize:20, 
    padding:8,
    color:"white",
    flex:13,
  }



});
