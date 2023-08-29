import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {InitialAtom} from '../atoms/InitialAtom';
import {TextAtom} from '../atoms/TextAtom';
import {scalePresets} from '../../theme/scale';
import {useNavigation} from '@react-navigation/native';
import {Routekeys} from '../../navigation/Routekeys';

interface PostMoleculeProps {
  data: Post;
}

export const PostMolecule: React.FC<PostMoleculeProps> = ({data}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(Routekeys.PostDetailsScreen, {data: data})
      }>
      <View style={styles.container}>
        <InitialAtom initial={data.title} />
        <View style={styles.textContainer}>
          <TextAtom
            text={data.title}
            style={styles.titleText}
            preset="bodyBold"
            numberOfLines={1}
          />
          <TextAtom
            text={data.body}
            style={{textTransform: 'capitalize'}}
            numberOfLines={3}
            ellipsizeMode="tail"
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scalePresets.largeScale,
    paddingVertical: scalePresets.mediumScale,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textContainer: {paddingHorizontal: scalePresets.mediumScale, width: '80%'},
  titleText: {
    textTransform: 'uppercase',
    paddingVertical: scalePresets.smallScale,
  },
});
