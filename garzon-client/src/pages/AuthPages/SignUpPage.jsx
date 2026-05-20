import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../../services/UserService';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  username: '',
  password: '',
  address: '',
};

const SignUpPage = () => {
  const [form, setForm] = useState(blankForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      await createUser({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        age: form.age.trim(),
        gender: form.gender,
        contactNumber: form.contactNumber.trim(),
        email: form.email.trim().toLowerCase(),
        type: 'viewer',
        username: form.username.trim().toLowerCase(),
        password: form.password,
        address: form.address.trim(),
        isActive: true,
      });

      setSuccess('Account created successfully. Redirecting to sign in...');
      setForm(blankForm);
      setTimeout(() => navigate('/auth/signin'), 900);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please check your details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl uppercase">Sign Up</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Create your account with the same monochrome layout pattern and shared button treatment.
        </p>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {success}
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">
              First Name
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              placeholder="Enter first name"
              autoComplete="given-name"
              className={inputClasses}
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">
              Last Name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              placeholder="Enter last name"
              autoComplete="family-name"
              className={inputClasses}
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-age" className="text-sm font-medium text-zinc-700">
              Age
            </label>
            <input
              id="signup-age"
              name="age"
              type="number"
              min="1"
              placeholder="Enter age"
              className={inputClasses}
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="signup-gender" className="text-sm font-medium text-zinc-700">
              Gender
            </label>
            <select
              id="signup-gender"
              name="gender"
              className={inputClasses}
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-email" className="text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              id="signup-email"
              name="email"
              type="email"
              placeholder="Enter email"
              autoComplete="email"
              className={inputClasses}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="signup-contact" className="text-sm font-medium text-zinc-700">
              Contact Number
            </label>
            <input
              id="signup-contact"
              name="contactNumber"
              type="tel"
              placeholder="09171234567"
              className={inputClasses}
              value={form.contactNumber}
              onChange={handleChange}
              minLength={11}
              maxLength={11}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-username" className="text-sm font-medium text-zinc-700">
            Username
          </label>
          <input
            id="signup-username"
            name="username"
            type="text"
            placeholder="Enter username"
            autoComplete="username"
            className={inputClasses}
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            placeholder="Enter password"
            autoComplete="new-password"
            className={inputClasses}
            value={form.password}
            onChange={handleChange}
            minLength={8}
            required
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <div>
          <label htmlFor="signup-address" className="text-sm font-medium text-zinc-700">
            Address
          </label>
          <textarea
            id="signup-address"
            name="address"
            placeholder="Enter address"
            className={`${inputClasses} min-h-24 resize-y`}
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName} disabled={isLoading}>
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600 text-center">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
