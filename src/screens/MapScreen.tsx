
import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useFocusEffect } from '@react-navigation/native';

const MapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const [markerCount, setMarkerCount] = useState(0); // Add this to track markers

  // Function to fit all markers in view
  const fitToMarkers = () => {
    const locations = tasks
      .filter(task => task.location)
      .map(task => {
        const locationObj = typeof task.location === 'string' 
          ? JSON.parse(task.location) 
          : task.location;
        return {
          latitude: locationObj.latitude,
          longitude: locationObj.longitude,
        };
      });

    setMarkerCount(locations.length);

    if (locations.length > 0 && mapRef.current) {
      setTimeout(() => {
        mapRef.current?.fitToCoordinates(locations, {
          edgePadding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
          },
          animated: true,
        });
      }, 1000);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fitToMarkers();
      return () => {
        // Cleanup if needed
      };
    }, [tasks])
  );

  return (
    <View style={styles.container}>
      {/* Add debug overlay */}
      <View style={styles.debugOverlay}>
        <Text>Total Tasks: {tasks.length}</Text>
        <Text>Tasks with Location: {markerCount}</Text>
      </View>

      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 17.433566223623796,
          longitude: 78.38188797614735,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onMapReady={() => {
          console.log('Map is ready'); // Debug log
          fitToMarkers();
        }}
      >
        {tasks
          .filter(task => task.location)
          .map(task => {
            const locationObj = typeof task.location === 'string' 
              ? JSON.parse(task.location) 
              : task.location;
            console.log('Creating marker for task:', task.id); // Debug log
            return (
              <Marker
                key={task.id}
                coordinate={{
                  latitude: locationObj.latitude,
                  longitude: locationObj.longitude,
                }}
                title={task.task}
                description={`Priority: ${task.priority}`}
                image={require("../assets/cmarker.png")}
                onPress={() => console.log('Marker pressed:', task.id)} // Debug log
                 anchor={{ x: 0.5, y: 0.5 }}
                
              />
            );
          })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  debugOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    zIndex: 1000,
    borderRadius: 5,
  },
});

export default MapScreen;

