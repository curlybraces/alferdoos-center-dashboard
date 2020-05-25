const SET_USER = (state, user) => (state.user = user);

const SET_MESSAGE = (state, payload) => {
  state.errors = [];
  state.messages.push(payload);
};

const SET_ERROR = (state, error) => state.errors.push(error);

const RESET_ERRORS_AND_MESSAGES = state => {
  state.errors = [];
  state.messages = [];
};

const SET_LOADER = (state, value) => (state.loading = value);

const SET_REGISTRATION = (state, value) => (state.is_user_registered = value);

const SET_REGISTERED_STUDENTS = (state, students) =>
  (state.registered_students = students);

const SET_YEAR_INFO = (state, year_info) => (state.year_info = year_info);

const SET_REGISTRATION_PERIOD = (state, period) =>
  (state.registration_period = period);

export default {
  SET_USER,
  SET_MESSAGE,
  SET_ERROR,
  RESET_ERRORS_AND_MESSAGES,
  SET_LOADER,
  SET_REGISTRATION,
  SET_REGISTERED_STUDENTS,
  SET_YEAR_INFO,
  SET_REGISTRATION_PERIOD
};
