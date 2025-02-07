// src/navigation/types.ts
export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  VehicleList: undefined;
  VehicleDetails: {
    vehicleId: string;
  };
  Booking: {
    vehicleId: string;
  };
  RequestDetails: {
    requestId: string;
  };
};