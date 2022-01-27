import Constant from 'expo-constants';
import { defaultAppConfig } from '../../app.config';

export const configuration = Constant.manifest?.extra as typeof defaultAppConfig;
