import { Text, TouchableOpacity, View } from "react-native"
import { FontAwesome5, Feather } from "@expo/vector-icons/"
import style from "./style"
import { useState } from "react"

export default function Task({   handleFeitoProp, feito, taskName, index, handleRemoveProp }) {

  const handleFeita = () => {
    handleFeitoProp(index)
  }


  const handleRemove = () => handleRemoveProp(index)

  return (
    <View style={style.containerOnProcessTask}>
      <TouchableOpacity onPress={handleFeita} style={feito ? style.checkButtonFeito : style.checkButton}>
        {feito && <Feather name="check" size={10} color="white" />}
      </TouchableOpacity>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[style.textTask, { textDecorationLine: `${feito && "line-through"}`, color: `${feito ? "#808080" : "white"}` }]}
      >
        {taskName}{" "}
      </Text>
      <TouchableOpacity onPress={handleRemove}>
        <FontAwesome5 name="trash-alt" size={22} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
