import { SafeAreaView, View, Text } from "react-native"
import BtnValidation from "./app/modules/shared/components/BtnValidation"
import { authStyles } from "./app/modules/shared/styles/authentication"
import { mainColor } from "./app/modules/shared/utils/colors"


export default () => {

  return (
    <SafeAreaView style={authStyles.authMainContainer}>
      <>
        <View>
          <Text style={[authStyles.indexTitle, authStyles.verifyIndexTitle]}>Vérification</Text>
          <Text style={[authStyles.indexText, authStyles.indexVerification]}>Entrer le code de 4 chiffres envoyé au +228 91 47 57 00.</Text>
        </View>

        <View style={authStyles.verifyInput}>
          <View style={{
            width: "20%",
            borderWidth: 1,
            borderColor: 'red'
          }}></View><View style={{
            width: "20%",
            borderWidth: 1,
            borderColor: 'red'
          }}></View><View style={{
            width: "20%",
            borderWidth: 1,
            borderColor: 'red'
          }}></View><View style={{
            width: "20%",
            borderWidth: 1,
            borderColor: 'red'
          }}></View>
        </View>

        <View>
          <Text style={authStyles.resendText}>Vous n'avez pas reçu de code? <Text  style={authStyles.resend}>Réenvoyez</Text>.</Text>
        </View>

        <View style={authStyles.buttonContainer}>
          <BtnValidation
              title="Suivant" 
              style={authStyles.signUpButton} 
              // onPress={() => {
              //     setModalActive(!modalActive) 
              //     setActiveScreen('signup')
              // }}
          />
        </View>
      </>
    </SafeAreaView>
  )
}