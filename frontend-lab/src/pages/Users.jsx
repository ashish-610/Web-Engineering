
import { useState } from 'react';
import { Card } from '../components/ui/Card.jsx';
import { Button } from '../components/ui/Button.jsx';
import UserCard from '../components/UserCard.jsx';
import { useCreateUser } from '../hooks/useCreateUser.js';
import { useUsers } from '../hooks/useUsers.js';

export default function Users() {
  const { data: users, isPending, isError, error, refetch, isFetching } = useUsers();

  if (isPending) return <p role="status">Loading users...</p>;
  if (isError) {
    return (
      <p role="alert" className="text-red-700 dark:text-red-300">
        Failed: {error.message}{' '}
        <Button onClick={() => refetch()}>Retry</Button>
      </p>
    );
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-fg">Users</h1>
        <p className="mt-2 text-muted">People in the frontend-lab community.</p>
      </div>
      <AddUserForm />
      {isFetching && <small role="status" className="text-muted">Refreshing...</small>}
      {users.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <Card>
          <p className="text-muted">No users to display.</p>
        </Card>
      )}
    </section>
  );
}

function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const mutation = useCreateUser();

  function handleSubmit(event) {
    event.preventDefault();
    mutation.mutate(
      { name: name.trim(), email: email.trim() },
      {
        onSuccess: () => {
          setName('');
          setEmail('');
        },
      },
    );
  }

  return (
    <Card>
      <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="grid gap-1 text-sm font-medium text-fg">
          Name
          <input
            className="rounded border border-line bg-bg px-3 py-2 text-fg"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-fg">
          Email
          <input
            className="rounded border border-line bg-bg px-3 py-2 text-fg"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <div className="sm:col-span-2">
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Adding...' : 'Add user'}
          </Button>
          {mutation.isError && (
            <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-300">
              Failed to add user: {mutation.error.message}
            </p>
          )}
          {mutation.isSuccess && (
            <p role="status" className="mt-2 text-sm text-muted">
              User added.
            </p>
          )}
        </div>
      </form>
    </Card>
  );
}
