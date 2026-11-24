
import { Card } from '../components/ui/Card.jsx';
import UserCard from '../components/UserCard.jsx';

const users = [
  { id: 1, name: 'Alex Morgan', email: 'alex.morgan@example.com', role: 'Designer' },
  { id: 2, name: 'Jordan Lee', email: 'jordan.lee@example.com', role: 'Engineer' },
  { id: 3, name: 'Taylor Kim', email: 'taylor.kim@example.com', role: 'Product manager' },
];

export default function Users() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-fg">Users</h1>
        <p className="mt-2 text-muted">People in the frontend-lab community.</p>
      </div>
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
