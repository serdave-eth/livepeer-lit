import * as LitJsSdk from '@lit-protocol/lit-node-client-nodejs';
 
//... import LitShareModal from "lit-share-modal-v3";
 
const payload = {
    baseUrl: 'my-awesome-app.vercel.app',
    path: '/asset/index.html',
    orgId: 'some-app',
    role: '',
    extraData: '',
  };
 
const handler = async (req, res) => {
  const { accessKey, webhookContext } = req.body;
 
  const { verified, header, payload } = LitJsSdk.verifyJwt({
    jwt,
  });
 
  if (!verified) {
    res.status(403).json({ message: 'Access token is not correct' });
  } else if (
    webhookContext?.resourceId &&
    (webhookContext.resourceId.baseUrl !== payload.baseUrl ||
      webhookContext.resourceId.path !== payload.path ||
      webhookContext.resourceId.orgId !== payload.orgId)
  ) {
    res.status(403).json({ message: 'ResourceId does not match' });
  } else {
    res.status(200).json({ message: 'Success' });
  }
};
 
export default handler;