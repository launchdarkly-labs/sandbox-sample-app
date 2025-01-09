// app/components/LoginForm.tsx
export default function LoginForm({ showOAuth }: { showOAuth: boolean }) {
  return (
    <div className="space-y-4">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>

      {showOAuth && (
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-2 border rounded hover:opacity-50">
              Google
            </button>
            <button className="p-2 border rounded hover:opacity-50">
              GitHub
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
