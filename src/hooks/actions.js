import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { authActions } from '../store/zolotoy/auth.slice';
import { modalActions } from '../store/zolotoy/modal.slice';
import { popupActions } from '../store/zolotoy/popup.slice';



const actions = {
  ...authActions,
  ...modalActions,
  ...popupActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
