// This file allows useElevation.ios and useElevation.android to be compiled as if typescript understood react-native suffixes.
// https://github.com/Microsoft/TypeScript/issues/8328
// Removing this file will result in breaking anywhere that uses useElevation
import { useElevation as ios } from './useElevation.ios';
import { useElevation as android } from './useElevation.android';

declare const useElevationIos: typeof ios;
declare const useElevationAndroid: typeof android;

export { useElevation } from './useElevation.ios';
