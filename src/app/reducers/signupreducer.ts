type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
  };
  
  type FormAction =
    | { type: 'SET_FIELD'; field: string; value: string }
    | { type: 'RESET_FORM' };
  
const signUpReducer = (state: FormState, action: FormAction): FormState => {
    switch (action.type) {
      case 'SET_FIELD':
        return { ...state, [action.field]: action.value };
      case 'RESET_FORM':
        return {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: '',
        };
      default:
        return state;
    }
  };
  
  export default signUpReducer;