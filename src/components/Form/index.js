import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultImc from './ResultImc/';

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha a altura e o peso")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular IMC")

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2))
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é:")
      setTextButton("Calcular novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular IMC")
    setMessageImc("Preencha a altura e o peso")
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.70"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75"
          keyboardType="numeric"
        />
        <Button
          onPress={() => validationImc()}
          title={textButton}
        />
      </View>
      <ResultImc messageResultImc={messageImc} ResultImc={imc} />
    </View>
  );
}