import { RefKey, RefOverrideKey } from "./constants";
process.env[RefKey] = process.env[RefKey] || process.env[RefOverrideKey];

import { restoreOnlyRun } from "./restoreImpl";

restoreOnlyRun(true);
