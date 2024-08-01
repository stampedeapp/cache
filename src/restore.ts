import { RefKey, RefOverrideKey } from "./constants";
process.env[RefKey] = process.env[RefKey] || process.env[RefOverrideKey];

import { restoreRun } from "./restoreImpl";

restoreRun(true);
