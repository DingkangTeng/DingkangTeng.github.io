const locales = {
  en: {
    htmlLang: "en",

    // auto：choose map based on IP
    // china：use Geovisearth map (China)
    mapProvider: "auto",

    text: {
      pageTitle: "My Geography",
      location: "Location",
      period: "Period",
      streetMap: "Street map",
      satellite: "Satellite",
      resetView: "Reset map view",
      geovisCopyright: "&copy; Geovisearth",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out"
    },

    schools: {
      hzau: {
        name: "Huazhong Agricultural University",
        degree: "B.A. in Land Resource Management",
        location: "Wuhan, China",
        period: "2015–2019"
      },
      polyu: {
        name: "The Hong Kong Polytechnic University",
        degree: "MSc in Urban Informatics and Smart Cities",
        location: "Hong Kong, China",
        period: "2024–2026"
      },
      utk: {
        name: "University of Tennessee, Knoxville",
        degree: "PhD in Geography",
        location: "Knoxville, Tennessee, USA",
        period: "2026–Present"
      }
      // Add more schools here as needed
    }
  },

  zh: {
    htmlLang: "zh-CN",
    mapProvider: "china",

    text: {
      pageTitle: "我的地理足迹",
      location: "地点",
      period: "时间",
      streetMap: "普通地图",
      satellite: "卫星影像",
      resetView: "回到默认位置",
      geovisCopyright: "&copy; 中科星图",
      zoomIn: "放大",
      zoomOut: "缩小"
    },

    schools: {
      hzau: {
        name: "华中农业大学",
        degree: "土地资源管理 · 管理学学士",
        location: "中国武汉",
        period: "2015–2019"
      },
      polyu: {
        name: "香港理工大学",
        degree: "城市信息学及智慧城市 · 理学硕士",
        location: "中国香港",
        period: "2024–2026"
      },
      utk: {
        name: "田纳西大学诺克斯维尔分校",
        degree: "地理学博士",
        location: "美国田纳西州诺克斯维尔",
        period: "2026–至今"
      }
    }
  }
};

const defaultLang = "en";

const normalizedLang = (
  new URLSearchParams(window.location.search).get("lang") || defaultLang
).trim().toLowerCase();

// If the specified language is not supported, fall back to the default language
export const lang = Object.hasOwn(locales, normalizedLang)
  ? normalizedLang
  : defaultLang;

const fallback = locales[defaultLang];
const current = locales[lang];

// Use the current language settings, falling back to the default language if necessary
export const locale = {
  htmlLang: current.htmlLang ?? fallback.htmlLang,
  mapProvider: current.mapProvider ?? fallback.mapProvider
};

// Get the translated text for a given key, falling back to the default language if necessary
export function t(key) {
  return current.text?.[key] ?? fallback.text[key] ?? key;
}

// Get the translated school information for a given school ID, falling back to the default language if necessary
export function getSchoolText(id) {
  return {
    ...fallback.schools[id],
    ...current.schools?.[id]
  };
}