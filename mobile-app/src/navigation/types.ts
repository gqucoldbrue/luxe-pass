// src/navigation/types.ts
// This defines our navigation structure in TypeScript
export type RootStackParamList = {
    Dashboard: undefined;
    RequestDetails: { requestId: string };
    Profile: undefined;
    Settings: undefined;
  };
