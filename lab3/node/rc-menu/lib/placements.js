"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placementsRtl = exports.placements = exports.default = void 0;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow
  }
};
exports.placements = placements;
var placementsRtl = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow
  },
  rightTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow
  },
  rightBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow
  },
  leftTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow
  },
  leftBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow
  }
};
exports.placementsRtl = placementsRtl;
var _default = placements;
exports.default = _default;