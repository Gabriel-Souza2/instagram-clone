import type { RouteProp } from '@react-navigation/native';

interface ScreenParamList {
    BottomMenuRoutes: undefined;
    Comments: undefined;
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends ScreenParamList {}
    }
  }