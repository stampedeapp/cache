import { RefKey, RefOverrideKey } from "./constants";
process.env[RefKey] = process.env[RefKey] || process.env[RefOverrideKey];

import { saveRun } from "./saveImpl";

saveRun(true);
