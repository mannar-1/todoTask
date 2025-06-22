import { RESULTS, request, check } from 'react-native-permissions';
import { CAMERA_PERMISSION } from '../services/permissions/permissions.constants';

interface PermissionResultChecker {
    (value: string): boolean;
}
interface PermissionStatusChecker {
    (value: string): boolean;
}

interface PermissionBlockedChecker {
    (value: string): boolean;
}
interface PermissionUnavailableChecker {
    (value: string): boolean;
}

const isGranted: PermissionResultChecker = (value) => value === RESULTS.GRANTED;

const isDenied: PermissionStatusChecker = (value: string): boolean => value === RESULTS.DENIED;

const isBlocked: PermissionBlockedChecker = (value: string): boolean => value === RESULTS.BLOCKED;

const isUnavailable: PermissionUnavailableChecker = (value: string): boolean =>
  value === RESULTS.UNAVAILABLE;

const requestCameraPermission = () => {
  if (!CAMERA_PERMISSION) {
    throw new Error('CAMERA_PERMISSION is undefined');
  }
  return request(CAMERA_PERMISSION);
};

const checkCameraPermission = () => {
  if (!CAMERA_PERMISSION) {
    throw new Error('CAMERA_PERMISSION is undefined');
  }
  return check(CAMERA_PERMISSION);
};

export default {
  isGranted,
  isDenied,
  isBlocked,
  isUnavailable,
  requestCameraPermission,
  checkCameraPermission
}