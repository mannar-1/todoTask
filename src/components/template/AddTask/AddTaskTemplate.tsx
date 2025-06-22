import React, { useRef, useState } from 'react';
import FormInput from '../../atoms/FormInput/FormInput';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import PriorirtyList from '../../organisms/PriorityList/PriorityList';
import TaskPlaceholder from '../../../assets/TaskPlaceholder';
import IconButton from '../../atoms/IconButton/IconButton';
import { styles } from './AddTaskTemplate.styles';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { Permissions } from '../../../services/permissions';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or your preferred icon library
import CheckboxWithText from '../../atoms/CheckboxWithText/CheckboxWithText';
import { getCurrentLocation } from '../../../hooks/getCurrentLocation';
import { ActivityIndicator, Text } from 'react-native-paper';

interface AddTaskTemplateProps {
  addTask: () => void,
  setTask: (task: string) => void,
  priority: string,
  setPriority: (priority: string) => void,
  setCapturedImage: (image: string | null) => void,
  capturedImage?: string | null,
  isEditing?: boolean;
  task: string,
  isLocationEnabled: boolean;
  setIsLocationEnabled: (enabled: boolean) => void;
  setLocation: (location: { latitude: number, longitude: number } | null) => void;
  setIsChecked?: (checked: boolean) => void; // Optional prop for checkbox state

}
const AddTaskTemplate = ({ addTask, setTask, priority, setPriority, capturedImage, setCapturedImage, task, isEditing, isLocationEnabled, setIsLocationEnabled, setLocation ,setIsChecked}: AddTaskTemplateProps) => {
  const [showCamera, setShowCamera] = useState(false);
  const device = useCameraDevice("back");
  const camera = useRef<Camera>(null);
  const [loading, setLoading] = useState(false);
  const handleCameraPress = async () => {
    const checkStatus = await Permissions.checkCameraPermission();

    if (Permissions.isGranted(checkStatus)) {
      setShowCamera(true);
    }

    if (Permissions.isUnavailable(checkStatus) || Permissions.isBlocked(checkStatus)) {
      setShowCamera(false);
    }

    if (Permissions.isDenied(checkStatus)) {
      const requestStatus = await Permissions.requestCameraPermission();
      if (Permissions.isGranted(requestStatus)) {
        setShowCamera(true);
      } else {
        setShowCamera(false);
      }
    }
  };

  const takePhoto = async () => {
    try {
      console.log(camera.current, "camera ref");
      if (camera.current) {
        const photo = await camera.current.takePhoto({
          flash: 'off',
        });
        setCapturedImage(`file://${photo.path}`);
        setShowCamera(false);
      }
    } catch (error) {
      console.error("Failed to take photo:", error);
    }
  };

  if (showCamera && device) {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          ref={camera}
          style={{ flex: 1 }}
          device={device}
          isActive={true}
          photo={true}
        />
        <View style={cameraStyles.cameraControls}>
          <TouchableOpacity
            style={cameraStyles.closeButton}
            onPress={() => setShowCamera(false)}
          >
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={cameraStyles.captureButton}
            onPress={takePhoto}
          >
            <View style={cameraStyles.captureButtonInner} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleLocationToggle = () => {
    if (!isLocationEnabled) {
      getCurrentLocation({ setLocation,setIsLocationEnabled ,setLoading});
    }
    setIsLocationEnabled(!isLocationEnabled);
  };

  return (
    <ScrollView >
      <View style={styles.imageContainer}>
        {capturedImage ? (
          <Image
            source={{ uri: capturedImage }}
            style={cameraStyles.capturedImage}
            resizeMode="cover"
          />
        ) : (
          <TaskPlaceholder />
        )}
      </View>
      <View style={styles.imgbtn}>
        <IconButton icon="plus" text="Add photo" mode="contained" color="rgb(248, 217, 79)" handleClick={handleCameraPress} loading={false} />
      </View>
      <FormInput setTask={setTask} value={task} />
      {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="rgb(248, 217, 79)" />
            <Text style={styles.loadingText}>Getting location...</Text>
          </View>
        ) : (
          <CheckboxWithText 
            text="Add location"  
            checked={isLocationEnabled}
            onPress={handleLocationToggle}
          />
        )}
      <View style={styles.list}>
        <PriorirtyList priority={priority} setPriority={setPriority} />
      </View>
      <View style={styles.savebtn}>
        <IconButton text="Save" mode="contained" color="rgb(248, 217, 79)" handleClick={addTask} loading={false} />
      </View>
    </ScrollView>
  );
};

const cameraStyles = {
  cameraControls: {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    flexDirection: 'row' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  closeButton: {
    position: 'absolute' as const,
    top: 20,
    right: 20,
    padding: 10,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  capturedImage: {
    width: '100%' as unknown as number, // or use Dimensions.get('window').width for a number value
    height: 200,
  },
};
export default AddTaskTemplate;
