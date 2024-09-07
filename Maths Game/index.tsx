import { SetStateAction, useState } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

export default function Index() {

  const [textAns, setTextAns] = useState("");
  const [numA, setNumA] = useState(Math.floor(Math.random() * 50) + 1);
  const [numB, setNumB] = useState(Math.floor(Math.random() * 10) + 1);
  const [sym, setSym] = useState(Math.floor(Math.random() * 3));
  const [showAns, setShowAns] = useState("");
  const s = ["+", "-", "x", "/"]


  function textBoxText(e: SetStateAction<any>){
    setTextAns(e)
    setShowAns("")
  }

  function buttonClick(){
    setNumA(Math.floor(Math.random() * 50) + 1)
    setNumB(Math.floor(Math.random() * 10) + 1)
    console.log(sym)

    switch (sym){
      case 0:
        if(numA + numB == Number(textAns)){
          setShowAns("Correct Answer")
        }
        else{
          setShowAns("Addition Answer \n\t\t\t"+numA+s[sym]+numB+" = "+(numA+numB))
        }
        break;
      case 1:
        if(numA - numB == Number(textAns)){
          setShowAns("Correct Answer")
        }
        else{
          setShowAns("Subtraction Answer \n\t\t\t"+numA+s[sym]+numB+" = "+(numA-numB))
        }
        break;
      case 2:
        if(numA * numB == Number(textAns)){
          setShowAns("Correct Answer")
        }
        else{
          setShowAns("Multiplication Answer \n\t\t\t"+numA+s[sym]+numB+" = "+(numA*numB))
        }
        break;

    }
    setTextAns("")
    setSym(Math.floor(Math.random() * 3));
    
  }

  return (
    <View style={sty.outerContainer}>
      <View style={sty.question}>
        <Text style={sty.questionText}>{numA} {s[sym]} {numB}</Text>
      </View>
      <View style={sty.textContainer}>
        <TextInput style={sty.textInput} placeholder="Enter Your Answer" onChangeText={textBoxText} value={textAns} keyboardType="number-pad" />
      </View>
      
      <View style={sty.buttonContainer}>
        <Button title="Submit" onPress={buttonClick}/>
      </View>
      
      <View style={sty.statusContainer}>
        <Text style={{fontSize:30, color:"white"}}>{showAns}</Text>
      </View>
      
    </View>
  );
}

const sty = StyleSheet.create({
  outerContainer:{
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    backgroundColor:"#32127A",
    height:"100%"
    
  },
  question:{
    height:80,
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#8000FF",
    padding:10,
    borderRadius:10
  },
  questionText:{
    fontSize:40,
    color:"white"
  },
  textContainer:{
    borderWidth:2,
    borderColor:"#DBD7D2",
    width:"100%",
    marginTop:28,
    height:70,
    borderRadius:10,
     backgroundColor:"white"
  },
  textInput:{
    height:"100%",
    padding:10,
    fontSize:30,
   
  },
  buttonContainer:{
    marginTop:30,
    width:"100%",
    height:40,
  
  },
  statusContainer:{

    width:"100%",
    margin:30,
    padding:10,
    height:150,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#DE3163",
    borderRadius:10
  }
});
