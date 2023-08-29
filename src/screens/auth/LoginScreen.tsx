import * as React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {scalePresets} from '../../theme/scale';
import {InputAtom} from '../../components/atoms/InputAtom';
import {ButtonAtom} from '../../components/atoms/ButtonAtom';
import {TextAtom} from '../../components/atoms/TextAtom';
import {ColorPresets} from '../../theme/color';
import {loginInfo} from '../../constants/appContants';
import {GenericNavigation} from '../../navigation/AppNavigation';
import {Routekeys} from '../../navigation/Routekeys';

interface LoginScreenProps extends GenericNavigation {}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
    if (loginInfo.username === username && loginInfo.password === password) {
      // Alert.alert('Congratulations', 'Login Successful');
      navigation.navigate(Routekeys.HomeScreen);
    } else {
      Alert.alert('Oops', 'Login failed');
    }
  };
  return (
    <View style={styles.container}>
      <TextAtom
        text="Hello there, Welcome back"
        preset="title1"
        style={{textAlign: 'center'}}
      />
      <View style={{justifyContent: 'space-around'}}>
        <InputAtom
          label="Username"
          placeholder="Hint: admin"
          value={username}
          autoCapitalize="none"
          onChangeText={(val: string) => setUsername(val)}
        />
        <InputAtom
          label="Password"
          placeholder="Hint: 123456789"
          value={password}
          onChangeText={(val: string) => setPassword(val)}
          secureTextEntry
        />
        <ButtonAtom title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scalePresets.baseScale,
    justifyContent: 'space-around',
    backgroundColor: ColorPresets.white,
  },
});
