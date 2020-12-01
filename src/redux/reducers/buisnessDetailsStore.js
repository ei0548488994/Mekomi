const initialState = {
  buisnessDetails: {
    admin: "",
    businessName: "naaman",
    category: "",
    description: "",
    adress: "",
    email: "",
    phone: "",
    elevator: false,
    FriendlyWorkspace: false,
    InstantBook: false,
    WirelessInternet: false,
    freeParkingOnPremises: false,
    freeParkingOnStreet: false,
    smokingAllowed: false,
    events: false,
    website: "",
    facebook: "",
    twitter: "",
    googleplus: "",
  },
};

const buisnessDetails={
    setBuisnessName(state,action){
        state.buisnessDetails.businessName=action.payload
    },
}

export default produce((state, action) => createReducer(state,action,buisnessDetails),initialState);