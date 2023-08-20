import {
  flowRendererV2,
  flowStyles
} from "./chunk-5UTYZKRS.js";
import {
  flowDb,
  parser$1
} from "./chunk-O2LIOJTY.js";
import "./chunk-FYOVAWPZ.js";
import "./chunk-2WXFVXVN.js";
import "./chunk-MJ4ONGF3.js";
import "./chunk-D3D2LU37.js";
import "./chunk-Q6VF4SLY.js";
import "./chunk-IOAYEOC6.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-3SGUDTQC.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/mermaid/dist/flowDiagram-v2-e4ef3cbe.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-e4ef3cbe-ZJF2LBHB.js.map
