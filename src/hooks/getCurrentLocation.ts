import { Permissions } from "../services/permissions";
import Geolocation from '@react-native-community/geolocation';
import { Alert, Linking, Platform } from 'react-native';

interface getCurrentLocationProps {
    setLocation: (location: { latitude: number; longitude: number } | null) => void;
    setIsLocationEnabled: (enabled: boolean) => void;
    setLoading: (loading: boolean) => void; // Optional prop for loading state
}

const openLocationSettings = async () => {
    if (Platform.OS === 'ios') {
        await Linking.openSettings();
    } else {
         await Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
    }
};

export const getCurrentLocation = async (props: getCurrentLocationProps) => {
    const { setLocation, setIsLocationEnabled , setLoading} = props;
    
    try {
        setLoading(true);
        const checkStatus = await Permissions.checkLocationPermission();
        setIsLocationEnabled(true);
        if (Permissions.isGranted(checkStatus)) {
            await new Promise((resolve, reject) => {
                Geolocation.getCurrentPosition(
                    (position) => {
                        setLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        });
                        setIsLocationEnabled?.(true);
                        resolve(position);
                    },
                    (error) => {
                        if (error.code === 2) { 
                            Alert.alert(
                                'Location Services Disabled',
                                'Please enable location services to use this feature.',
                                [
                                    {
                                        text: 'Cancel',
                                        style: 'cancel',
                                        onPress: () => {
                                            setLocation(null);
                                            setIsLocationEnabled?.(false);
                                        }
                                    },
                                    {
                                        text: 'Open Settings',
                                        onPress: () => {
                                            setIsLocationEnabled(false); // Uncheck before opening settings
                                            openLocationSettings();
                                            setIsLocationEnabled(true);
                                        }
                                    }
                                ]
                            );
                        }
                        reject(error);
                    },
                    { 
                        enableHighAccuracy: true, 
                        timeout: 15000, 
                        maximumAge: 10000 
                    }
                );
            });
        }
        
        if (Permissions.isDenied(checkStatus)) {
            const requestStatus = await Permissions.requestLocationPermission();
            if (Permissions.isGranted(requestStatus)) {
                getCurrentLocation(props);
            } else {
                Alert.alert(
                    'Permission Required',
                    'Location permission is required to add location to your task',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                            onPress: () => {
                                setLocation(null);
                                setIsLocationEnabled?.(false);
                            }
                        },
                        {
                            text: 'Open Settings',
                            onPress: openLocationSettings
                        }
                    ]
                );
            }
        }
    } catch (error) {
        console.error("Error getting location:", error);
        setLocation(null);
        setIsLocationEnabled?.(false);
    }
    finally{
        setLoading(false);
    }
};