export const emoji = {
  "check": "<:tick:1430462544698540144>",
  "info": "<:info:1430462548452442207>",
  "cross": "<:crosss:1430463116767924264>",
  "add": "<:add:1430462540021895208>",
  "reset": "<:reset:1430462556039938130>",
  "folder": "<:folder:1430462546883776622>",
  "openfolder": "<:open:1430462552470720522>",
  "music": "<a:music:1430462537786200115>",
  "right": "<:right:1430462542118916126>",
  "left": "<:left:1430462550398468138>",
  "loading": "<a:loading:1430462535865208874>",
  get(name, fallback = '') {
    return this[name] || fallback;
  },
};

export default emoji;
