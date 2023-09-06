import { Button, FlatList, Pressable, Text, TextInput, TouchableHighlight, TouchableHighlightComponent, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons/"
import style from "./style"
import Task from "../../components/task"
import { useState } from "react"

export default function Home() {
  const [value, setValue] = useState("")
  const [tasks, setTasks] = useState([
    { name: "name", feito: false },
    { name: "name", feito: false },
    { name: "nameadawd", feito: false },
  ])
  const [criadas, setCriadas] = useState(0)
  const [feitas, setFeitas] = useState(0)

  const handleAdd = () => {
    setTasks([...tasks, { name: value, feito: false }])
    setValue("")
    setCriadas(tasks.length + 1)
  }

  const handleFeitas = (indexToFeito) => {
    setTasks((prev) => {
      const a = prev.filter((_, index) => index === indexToFeito)
      prev.splice(indexToFeito, 1, { name: a[0].name, feito: !a[0].feito })
      if (!a[0].feito == false) setFeitas(feitas - 1)
      if (!a[0].feito == true) setFeitas(feitas + 1)
      return prev
    })
  }

  const handleRemove = (indexToRemove) => {
    setTasks((prev) => {
      return prev.filter((_, index) => index !== indexToRemove)
    })
  }

  return (
    <View style={style.container}>
      <View style={style.containerTop}>
        <View style={style.containerTopIntern}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name="rocket-launch-outline" size={50} color="#4EA8DE" />
            <Text style={{ color: "#4EA8DE", fontSize: 40, fontWeight: "900" }}>to</Text>
            <Text style={{ color: "#5E60CE", fontSize: 40, fontWeight: "900" }}>do</Text>
          </View>
          <View style={style.containerInputAdd}>
            <TextInput
              value={value}
              onChangeText={setValue}
              placeholderTextColor="#808080"
              placeholder="Adicione uma nova tarefa"
              style={style.inputAdd}
            />
            <TouchableHighlight onPress={handleAdd} style={style.buttonAdd}>
              <Ionicons name="add-circle-outline" size={20} color="white" />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={style.containerTasks}>
        <View style={style.conclusionTasks}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ color: "#1E6F9F", fontSize: 15, fontWeight: "bold" }}>Criadas</Text>
            <View style={style.containerNumber}>
              <Text style={style.conclusionNumber}>{criadas}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ color: "#8284FA", fontSize: 15, fontWeight: "bold" }}>Concluidas</Text>
            <View style={style.containerNumber}>
              <Text style={style.conclusionNumber}>{feitas}</Text>
            </View>
          </View>
        </View>
        <View style={{ borderBottomColor: "#333333", borderBottomWidth: 1 }} />
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Task key={index} handleFeitoProp={handleFeitas} feito={item.feito} taskName={item.name} index={index} handleRemoveProp={handleRemove} />
          )}
          ListEmptyComponent={
            <View style={style.containerTasksComponents}>
              <MaterialCommunityIcons name="clipboard-text-outline" size={100} color="#3d3d3d" />
              <Text style={{ color: "#333333", fontSize: 15, fontWeight: "bold" }}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={{ color: "#333333", fontSize: 15, fontWeight: "004" }}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          }
        />
      </View>
    </View>
  )
}
