import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    _classCallCheck(this, CacheMap);
    this.maps = void 0;
    // Used for cache key
    // `useMemo` no need to update if `id` not change
    this.id = 0;
    this.maps = Object.create(null);
  }
  _createClass(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
      this.id += 1;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap;
}();
export default CacheMap;