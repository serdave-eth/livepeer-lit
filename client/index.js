import { createReactClient } from '@livepeer/react';
import { studioProvider } from 'livepeer/providers/studio';
 
const LivepeerClient = createReactClient({
  provider: studioProvider({ apiKey: 'a55a4760-055b-41d8-9e56-4cc4484d6313' }),
});
 
export default LivepeerClient;