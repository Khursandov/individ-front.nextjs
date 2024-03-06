import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
// import { authActions } from 'store/auth/auth.slice';

const allActionCreators = {
  // ...authActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(allActionCreators, dispatch), [dispatch]);
};
