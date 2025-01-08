// app/components/DatabaseStatus.tsx
export default function DatabaseStatus({
  isCloudEnabled,
  description,
}: {
  isCloudEnabled: boolean;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            isCloudEnabled ? "bg-green-500" : "bg-yellow-500"
          }`}
        />
        <span className="font-medium">
          {isCloudEnabled
            ? "Cloud Database Active"
            : "On-Premise Database Active"}
        </span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
