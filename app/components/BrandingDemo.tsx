// app/components/BrandingDemo.tsx
export default function BrandingDemo() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-[#9333EA] to-[#EC4899] p-6 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">New Brand Experience</h3>
        <p className="text-sm opacity-90">
          Experience our new information architecture and branding guidelines
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white dark:bg-zinc-900 shadow rounded">
          <h4 className="font-medium mb-2">New Navigation</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Streamlined user experience
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-zinc-900 shadow rounded">
          <h4 className="font-medium mb-2">Updated Design</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Modern and consistent look
          </p>
        </div>
      </div>
    </div>
  );
}
