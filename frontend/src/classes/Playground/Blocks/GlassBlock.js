import Axis from "../../Axis";
import { BlockType } from "../BlockType";
import { FullBlock } from "./FullBlock";

/**
 * 代表一個玻璃方塊，即透明的單位方塊
 */
class GlassBlock extends FullBlock {
  constructor(options) {
    super({ type: BlockType.GlassBlock, blockName: 'Glass Block', transparent: true, ...options });
  }

  /**
   * 取得此方塊指定平面的顏色
   * @param {symbol} dir 指定平面的法向量方向
   * @returns {string}
   */
  surfaceColor(dir) {
    switch (dir) {
      case Axis.PX:
        return 'rgba(200, 200, 200, 0.5)';

      case Axis.PY:
        return 'rgba(240, 240, 240, 0.5)';

      case Axis.PZ:
        return 'rgba(160, 160, 160, 0.5)';

      case Axis.NX:
        return 'rgba(180, 180, 180, 0.5)';

      case Axis.NY:
        return 'rgba(140, 140, 140, 0.5)';

      case Axis.NZ:
        return 'rgba(220, 220, 220, 0.5)';

      default:
        throw new Error();
    }
  }

  PPUpdate() {}
}

export { GlassBlock };