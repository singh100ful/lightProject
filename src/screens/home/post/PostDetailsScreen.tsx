import * as React from 'react';
import {Text, View} from 'react-native';
import {scalePresets} from '../../../theme/scale';
import {TextAtom} from '../../../components/atoms/TextAtom';
import {GenericNavigation} from '../../../navigation/AppNavigation';

interface PostDetailsScreenProps extends GenericNavigation {}

export const PostDetailsScreen: React.FC<PostDetailsScreenProps> = ({
  route,
}) => {
  const title = route?.params?.data?.title;
  const body = route?.params?.data?.body;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View style={{paddingHorizontal: scalePresets.largeScale}}>
        <TextAtom
          text={title}
          preset="title1"
          style={{
            textTransform: 'uppercase',
            paddingVertical: scalePresets.mediumScale,
          }}
        />
        <TextAtom
          text={body}
          preset="body"
          style={{
            textTransform: 'capitalize',
            paddingVertical: scalePresets.smallScale,
          }}
        />
      </View>
    </View>
  );
};
