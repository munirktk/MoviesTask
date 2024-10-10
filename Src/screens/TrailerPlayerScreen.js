import React, { useCallback, useEffect, useRef,useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../server/api';
// import YoutubePlayer from "react-native-youtube-iframe";
const TrailerPlayerScreen = () => {
  const playerRef = useRef(null);
  const [videoKey, setVideoKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const { movieId } = route.params;


  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await api.get(`/${movieId}/videos`, {
          params: { language: 'en-US' },
        });
        const trailers = response.data.results;
        console.log("trailers...", trailers);
        
        if (trailers.length > 0) { 
          setVideoKey(trailers[0].key);
        } else {
          console.log('No trailers found for this movie.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching video details:', error);
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [movieId]);

  const handleEnd = () => {
    navigation.goBack();  
  };

  const handleDone = () => {
    navigation.goBack(); 
  };
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <View style={styles.container}>
    {videoKey ? (
          <View>
          {/* <YoutubePlayer
            height={300}
            play={playing}
            videoId={videoKey}
            onChangeState={onStateChange}
          /> */}
          <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
    ) : (
      <Text>No trailer available for this movie.</Text>
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  doneButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default TrailerPlayerScreen;
