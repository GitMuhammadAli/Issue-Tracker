type FormState = {
  email: string;
  password: string;
  loading: boolean;
  error: string;
};

type FormAction =
  | { type: "SET_FIELD"; field: string; value: string }
  | { type: "RESET_FORM" }
  | { type: 'SET_LOADING' }
  | { type: 'SET_ERROR'; error: string };


const signInReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return {
        email: "",
        password: "",
        loading: false,
        error: "",
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
        error: "",
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default signInReducer;