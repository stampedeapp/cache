import { RefKey, RefOverrideKey } from "./constants";
process.env[RefKey] = process.env[RefKey] || process.env[RefOverrideKey];

import { saveOnlyRun } from "./saveImpl";

saveOnlyRun(true);
