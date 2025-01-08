import * as LaunchDarkly from "launchdarkly-node-server-sdk";

const createNewLaunchdarklyServerClient = async () => {
  console.log("created new LD client");
  if (!process.env.LAUNCHDARKLY_SDK_KEY) {
    throw new Error("LAUNCHDARKLY_SDK_KEY required");
  }

  if (!process.env.LAUNCHDARKLY_BASE_URI) {
    throw new Error("LAUNCHDARKLY_BASE_URI required");
  }

  if (!process.env.LAUNCHDARKLY_EVENTS_URI) {
    throw new Error("LAUNCHDARKLY_EVENTS_URI required");
  }

  if (!process.env.LAUNCHDARKLY_STREAM_URI) {
    throw new Error("LAUNCHDARKLY_STREAM_URI required");
  }

  const client = LaunchDarkly.init(process.env.LAUNCHDARKLY_SDK_KEY ?? "", {
    baseUri: process.env.LAUNCHDARKLY_BASE_URI,
    eventsUri: process.env.LAUNCHDARKLY_EVENTS_URI,
    streamUri: process.env.LAUNCHDARKLY_STREAM_URI,
  });

  await client.waitForInitialization();

  return client;
};

const globalForLDServer = global as unknown as {
  ldServerClient: LaunchDarkly.LDClient;
};

export const ldServerClient =
  globalForLDServer.ldServerClient ||
  (await createNewLaunchdarklyServerClient());

if (process.env.NODE_ENV !== "production")
  globalForLDServer.ldServerClient = ldServerClient;
