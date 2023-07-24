/* Import moment provider */
const MomentClient = require("moment");

/* Set locale moment */
require(`moment/locale/${
  process.env.REACT_APP_LOCAL_ZONE ? process.env.REACT_APP_LOCAL_ZONE : "id" // Default locale id/Indonesian
}`);

export default MomentClient;
