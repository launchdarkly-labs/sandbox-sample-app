// Add new imports for our demo UI
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import DatabaseStatus from "./components/DatabaseStatus";
import BrandingDemo from "./components/BrandingDemo";
import UserProfile from "./components/UserProfile";
import { ldServerClient } from "./lib/ldServerSdk";

export const dynamic = "force-dynamic";

async function getFlags() {
  const client = ldServerClient; // await the Promise to get the actual client

  const context = {
    kind: "user",
    key: "example-user-key",
  };

  // Define flag names
  const flagNames = [
    "enable-ai-suggestions",
    "enable-onboarding-v2",
    "enable-logout-api-v2",
    "enable-cloud-db",
    "enable-oauth-login-flow",
    "enable-new-brand-ia",
    "enable-enhanced-user-profiles",
  ];

  try {
    // Get all flag values
    const flags = await Promise.all(
      flagNames.map(async (flagName) => ({
        name: flagName,
        value: await client.variation(flagName, context, false),
      }))
    );

    return flags;
  } catch (error) {
    console.error("LaunchDarkly error:", error);
    throw error;
  }
}

export default async function Home() {
  const flags = await getFlags();

  // Convert flags array to an easy-to-use object
  const flagValues = flags.reduce(
    (acc, flag) => ({
      ...acc,
      [flag.name]: flag.value,
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {} as Record<string, any>
  );

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8">Feature Flag Demo</h1>

        {/* User Profile Section */}
        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          <UserProfile 
            enableEnhancedProfiles={flagValues["enable-enhanced-user-profiles"]} 
          />
        </section>

        {/* Database Section */}
        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Database Configuration</h2>
          <DatabaseStatus
            isCloudEnabled={flagValues["enable-cloud-db"] !== "off"}
            description="Migration status from on-prem to cloud database"
          />
        </section>

        {/* Authentication Section */}
        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Authentication</h2>
          <LoginForm showOAuth={flagValues["enable-oauth-login-flow"]} />

          <div className="mt-4">
            <LogoutButton useV2={flagValues["enable-logout-api-v2"]} />
          </div>
        </section>

        {/* Branding Section */}
        {flagValues["enable-new-brand-ia"] && (
          <section className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">New Brand Experience</h2>
            <BrandingDemo />
          </section>
        )}

        {/* Debug: Display raw flag values */}
        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Feature Flag Status</h2>
          <pre className="text-sm">{JSON.stringify(flags, null, 2)}</pre>
        </section>
      </main>
    </div>
  );
}
