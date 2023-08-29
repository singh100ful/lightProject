import * as React from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import {SeparatorAtom} from '../../components/atoms/SeparatorAtom';
import {PostMolecule} from '../../components/molecules/PostMolecule';
import {useFetch} from '../../utils/hooks/useFetch';
import {ITEMS_PER_PAGE} from '../../constants/appContants';
import {ColorPresets} from '../../theme/color';
import {scalePresets} from '../../theme/scale';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const [page, setPage] = React.useState(1);
  const [refreshing, setRefreshing] = React.useState(false);
  const {data, loading, error, refresh} = useFetch<Post>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const displayedPosts = data.slice(0, page * ITEMS_PER_PAGE);

  const handleEndReached = React.useCallback(() => {
    if (displayedPosts.length < data.length) {
      setPage(prevPage => prevPage + 1);
    }
  }, [displayedPosts.length, data.length]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refresh();
    setPage(1);
    setRefreshing(false);
  }, [refresh]);

  const renderHeader = () => {
    return (
      <View
        style={{
          alignItems: 'flex-end',
          paddingHorizontal: scalePresets.baseScale,
          paddingVertical: scalePresets.smallScale,
        }}>
        <Button title="Refresh" onPress={onRefresh} />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={6}
        windowSize={11}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={() => <SeparatorAtom />}
        renderItem={({item, index}) => {
          return <PostMolecule data={item} key={index} />;
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color={ColorPresets.primaryRed} />
          ) : null
        }
      />
    </View>
  );
};
