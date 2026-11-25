import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../api/users.js';

export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (created) => {
      queryClient.setQueryData(['users'], (old = []) => [...old, created]);
    },
  });
}
